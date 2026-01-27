// import  { useRef, useState } from 'react';

// export default function InterviewBot() {
//     const [currentQ, setCurrentQ] = useState(0);
//     const [isSpeaking, setIsSpeaking] = useState(false);
//     const [isRecording, setIsRecording] = useState(false);
//     const [finished, setFinished] = useState(false);

//     const audioCtxRef = useRef<AudioContext | null>(null);
//     const destinationRef = useRef<MediaStreamAudioDestinationNode | null>(null);
//     const mediaRecorderRef = useRef<MediaRecorder | null>(null);
//     const chunksRef = useRef<Blob[]>([]);
//     const isPlayingRef = useRef(false);

//     const questions = [
//         'Tell me about yourself.',
//         'Why do you want this role?',
//         'What are your strengths and weaknesses?',
//         'Where do you see yourself in 5 years?',
//     ];

//     // Setup audio context and start continuous recording
//     const startContinuousRecording = async () => {
//         if (mediaRecorderRef.current) return; // already started

//         // 1) create audio context
//         const audioCtx = new AudioContext();
//         audioCtxRef.current = audioCtx;
//         const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

//         // create destination that will be recorded
//         const destination = audioCtx.createMediaStreamDestination();
//         destinationRef.current = destination;

//         // connect mic to destination
//         const micSource = audioCtx.createMediaStreamSource(micStream);
//         micSource.connect(destination);

//         // create MediaRecorder on the mixed destination stream
//         const recorder = new MediaRecorder(destination.stream);
//         mediaRecorderRef.current = recorder;
//         chunksRef.current = [];

//         recorder.ondataavailable = (e) => {
//             if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
//         };

//         recorder.onstop = async () => {
//             const finalBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
//             console.log('Final interview blob size:', finalBlob.size);

//             const form = new FormData();
//             form.append('interview', finalBlob, `interview_${Date.now()}.webm`);

//             // upload final single file
//             const uploadRes = await fetch('https://r8s74zxk-3001.inc1.devtunnels.ms/v1.0/interview', {
//                 method: 'POST',
//                 body: form,
//             });
//             console.log('Upload response:', await uploadRes.json());
//             setIsRecording(false);
//             setFinished(true);
//         };

//         recorder.start();
//         setIsRecording(true);
//         console.log('Recording started');
//     };

//     // play one TTS, route it into audioCtx + destination so recorder captures it
//     const playTTSAndWait = async (text: string) => {
//         if (!audioCtxRef.current || !destinationRef.current) throw new Error('Audio context not initialized');

//         if (isPlayingRef.current) return;
//         isPlayingRef.current = true;

//         // fetch TTS from backend
//         const res = await fetch('https://r8s74zxk-3001.inc1.devtunnels.ms/v1.0/tts', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ text }),
//         });
//         if (!res.ok) {
//             console.error('TTS failed', await res.text());
//             isPlayingRef.current = false;
//             return;
//         }

//         const blob = await res.blob();
//         const url = URL.createObjectURL(blob);

//         const audioEl = new Audio(url);
//         // create media element source and connect to destination (and speakers)
//         const source = audioCtxRef.current.createMediaElementSource(audioEl);
//         source.connect(destinationRef.current); // capture into recorder
//         source.connect(audioCtxRef.current.destination); // play out loud

//         setIsSpeaking(true);
//         try {
//             await audioEl.play(); // user initiated flow should allow autoplay
//         } catch (err) {
//             console.error('audioEl.play error:', err);
//         }

//         // wait for playback end
//         await new Promise<void>((resolve) => {
//             audioEl.onended = () => {
//                 // cleanup
//                 try {
//                     source.disconnect();
//                 } catch { }
//                 URL.revokeObjectURL(url);
//                 setIsSpeaking(false);
//                 isPlayingRef.current = false;
//                 resolve();
//             };
//         });
//     };

//     // main flow: start recording, then ask questions sequentially
//     const startInterview = async () => {
//         try {
//             await startContinuousRecording();
//             // start Q/A loop
//             for (let i = 0; i < questions.length; i++) {
//                 setCurrentQ(i);
//                 await playTTSAndWait(questions[i]); // bot asks
//                 // allow candidate to answer while mediaRecorder is still running:
//                 // wait a fixed time or provide a UI to press 'Done answer'
//                 // simple auto-wait:
//                 await new Promise((r) => setTimeout(r, 12000)); // record 12s for answer
//             }

//             // all done — stop recorder (uploads inside recorder.onstop)
//             mediaRecorderRef.current?.stop();
//         } catch (err) {
//             console.error('Interview flow error:', err);
//         }
//     };

//     return (
//         <div style={{ padding: 16 }}>
//             <h2>AI Interview Bot</h2>
//             <p>Question: {questions[currentQ] ?? '—'}</p>

//             {!finished ? (
//                 <button onClick={startInterview} disabled={isRecording || isSpeaking}>
//                     {isRecording ? 'Interview in progress…' : 'Start Interview'}
//                 </button>
//             ) : (
//                 <p>Interview finished and uploaded.</p>
//             )}
//         </div>
//     );
// }

import { useRef, useState, useEffect } from "react";

export default function InterviewBot() {
    const [currentQ, setCurrentQ] = useState(0);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [finished, setFinished] = useState(false);
    const [volume, setVolume] = useState(0); // 🔥 for visual level bar

    const audioCtxRef = useRef<AudioContext | null>(null);
    const destinationRef = useRef<MediaStreamAudioDestinationNode | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const isPlayingRef = useRef(false);
    const rafRef = useRef<number | null>(null);

    const questions = [
        "Tell me about yourself.",
        "Why do you want this role?",
        "What are your strengths and weaknesses?",
        "Where do you see yourself in 5 years?",
    ];

    // Setup audio context + analyser + recorder
    const startContinuousRecording = async () => {
        if (mediaRecorderRef.current) return;

        const audioCtx = new AudioContext();
        audioCtxRef.current = audioCtx;
        const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

        const destination = audioCtx.createMediaStreamDestination();
        destinationRef.current = destination;

        const micSource = audioCtx.createMediaStreamSource(micStream);
        micSource.connect(destination);

        // Setup analyser node to detect silence + volume meter
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        micSource.connect(analyser);
        analyserRef.current = analyser;

        // Start volume visualization loop
        const bufferLength = analyser.fftSize;
        const dataArray = new Uint8Array(bufferLength);

        const updateVolume = () => {
            analyser.getByteTimeDomainData(dataArray);
            let sumSquares = 0;
            for (let i = 0; i < bufferLength; i++) {
                const v = (dataArray[i] - 128) / 128;
                sumSquares += v * v;
            }
            const rms = Math.sqrt(sumSquares / bufferLength);
            setVolume(rms); // update UI
            rafRef.current = requestAnimationFrame(updateVolume);
        };

        updateVolume();

        const recorder = new MediaRecorder(destination.stream);
        mediaRecorderRef.current = recorder;
        chunksRef.current = [];

        recorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
        };

        recorder.onstop = async () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            const finalBlob = new Blob(chunksRef.current, { type: "audio/webm" });
            console.log("Final interview blob size:", finalBlob.size);

            const form = new FormData();
            form.append("interview", finalBlob, `interview_${Date.now()}.webm`);

            const uploadRes = await fetch(
                "https://r8s74zxk-3001.inc1.devtunnels.ms/v1.0/interview",
                {
                    method: "POST",
                    body: form,
                }
            );

            console.log("Upload response:", await uploadRes.json());
            setIsRecording(false);
            setFinished(true);
        };

        recorder.start();
        setIsRecording(true);
        console.log("Recording started");
    };

    // Wait until 2 seconds of silence is detected
    const waitForSilence = async (silenceDuration = 2000) => {
        if (!analyserRef.current) return;
        const analyser = analyserRef.current;
        const bufferLength = analyser.fftSize;
        const dataArray = new Uint8Array(bufferLength);

        let silenceStart: number | null = null;

        return new Promise<void>((resolve) => {
            const checkSilence = () => {
                analyser.getByteTimeDomainData(dataArray);
                let sumSquares = 0;
                for (let i = 0; i < bufferLength; i++) {
                    const v = (dataArray[i] - 128) / 128;
                    sumSquares += v * v;
                }
                const rms = Math.sqrt(sumSquares / bufferLength);

                if (rms < 0.02) {
                    if (silenceStart === null) silenceStart = performance.now();
                    if (performance.now() - silenceStart >= silenceDuration) {
                        resolve();
                        return;
                    }
                } else {
                    silenceStart = null;
                }

                requestAnimationFrame(checkSilence);
            };

            checkSilence();
        });
    };

    const playTTSAndWait = async (text: string) => {
        if (!audioCtxRef.current || !destinationRef.current)
            throw new Error("Audio context not initialized");

        if (isPlayingRef.current) return;
        isPlayingRef.current = true;

        const res = await fetch(
            "https://r8s74zxk-3001.inc1.devtunnels.ms/v1.0/tts",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            }
        );
        if (!res.ok) {
            console.error("TTS failed", await res.text());
            isPlayingRef.current = false;
            return;
        }

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        const audioEl = new Audio(url);
        const source = audioCtxRef.current.createMediaElementSource(audioEl);
        source.connect(destinationRef.current);
        source.connect(audioCtxRef.current.destination);

        setIsSpeaking(true);
        try {
            await audioEl.play();
        } catch (err) {
            console.error("audioEl.play error:", err);
        }

        await new Promise<void>((resolve) => {
            audioEl.onended = () => {
                try {
                    source.disconnect();
                } catch { }
                URL.revokeObjectURL(url);
                setIsSpeaking(false);
                isPlayingRef.current = false;
                resolve();
            };
        });
    };

    const startInterview = async () => {
        try {
            await startContinuousRecording();

            for (let i = 0; i < questions.length; i++) {
                setCurrentQ(i);
                await playTTSAndWait(questions[i]);
                console.log("⏳ Waiting for user to stop talking...");
                await waitForSilence(2000);
                console.log("✅ Silence detected, next question");
            }

            mediaRecorderRef.current?.stop();
        } catch (err) {
            console.error("Interview flow error:", err);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div style={{ padding: 16 }}>
            <h2>AI Interview Bot</h2>
            <p>Question: {questions[currentQ] ?? "—"}</p>

            {isRecording && (
                <div
                    style={{
                        height: 10,
                        width: "100%",
                        background: "#ddd",
                        borderRadius: 4,
                        marginBottom: 8,
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: `${Math.min(volume * 300, 100)}%`, // scale RMS
                            background: volume > 0.02 ? "#4caf50" : "#ccc",
                            transition: "width 0.1s linear",
                        }}
                    />
                </div>
            )}

            {!finished ? (
                <button onClick={startInterview} disabled={isRecording || isSpeaking}>
                    {isRecording ? "Interview in progress…" : "Start Interview"}
                </button>
            ) : (
                <p>Interview finished and uploaded.</p>
            )}
        </div>
    );
}

