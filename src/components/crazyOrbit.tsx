import { Phone, Send, User } from 'lucide-react'
import { Mail } from 'lucide-react'
export function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a1a2f] to-black text-white relative pb-20 overflow-hidden">

            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0a1a2f] backdrop-blur bg-opacity-80">
                {/* Mobile Menu Toggle (Checkbox Hack) */}
                <input type="checkbox" id="menu-toggle" className="hidden peer" />

                <div className="flex items-center justify-between">
                    <img
                        src="https://crazyorbit-dev.netlify.app/img/main-logo.png"
                        alt="CrazyOrbit Logo"
                        className="h-12"
                    />

                    <label htmlFor="menu-toggle" className="cursor-pointer md:hidden text-white">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-5 items-center text-lg">
                        <a href="/" className="text-white hover:text-pink-400">Home</a>
                        <a href="/about" className="text-pink-400 border-b-2 border-pink-400">About Us</a>
                        <a href="/services" className="text-white hover:text-pink-400">Services</a>
                        <a href="/careers" className="text-white hover:text-pink-400">Careers</a>
                        <a href="/projects" className="text-white hover:text-pink-400">Our Projects</a>
                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">Work with us</button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu (controlled by checkbox) */}
                <div className="hidden peer-checked:flex flex-col mt-4 space-y-4 md:hidden">
                    <a href="/" className="text-white hover:text-pink-400">Home</a>
                    <a href="/about" className="text-pink-400">About Us</a>
                    <a href="/services" className="text-white hover:text-pink-400">Services</a>
                    <a href="/careers" className="text-white hover:text-pink-400">Careers</a>
                    <a href="/projects" className="text-white hover:text-pink-400">Our Projects</a>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">Work with us</button>
                </div>
            </nav>

            <div className="h-20"></div>
            <div className="max-w-2xl mx-auto text-center space-y-3 py-12 px-4">
                <h1 className="text-2xl md:text-5xl font-semibold  mb-7">
                    About <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">CrazyOrbit</span>
                </h1>

                <p className="max-w-4xl mx-auto text-2xl text-gray-400">
                    Focused, tailored, profit-oriented web design solutions.
                </p>
            </div>

            <div className="flex justify-center pb-16 px-4">
                <img
                    src="https://crazyorbit-dev.netlify.app/img/Crazy%20Orbit%20Updated%20Images/About%20Us/about-banner.webp"
                    alt="CrazyOrbit Page Screenshots"
                    className="rounded-lg shadow-2xl w-full max-w-5xl transform rotate-[-6deg]"
                />
            </div>
            <p className="max-w-4xl mx-auto text-center text-gray-400 px-4 pb-16">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">CrazyOrbit</span> is a global integrated communications and marketing company that helps businesses take their online presence to the next level. Our team of experienced professionals is committed to helping our clients reach their goals and maximize their ROI. We offer a wide range of services, such as website design, SEO, social media marketing, content marketing, and more. Our passion is to help our clients succeed, and we strive to provide the highest quality service possible. With our expertise, your business will be able to reach its target audience and make a lasting impression.
            </p>
            <section className="relative max-w-600 mx-auto px-4 pb-16 overflow-hidden flex flex-col items-center justify-center">
                <h2
                    className="whitespace-nowrap font-extrabold select-none leading-none text-transparent pointer-events-none tracking-tight
                 text-[6rem] md:text-[10rem] lg:text-[10rem]"
                    style={{
                        WebkitTextStroke: '1px #6b21a8'
                    }}
                >
                    OUR PROCESS
                </h2>
                <h2 className="absolute text-3xl md:text-4xl font-normal leading-[150%] text-center text-white top-20 left-1/2 transform -translate-x-1/2 ">
                    Our Process
                </h2>

                {/* Process Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 " >
                    {[
                        { number: '01', title: 'Research', desc: 'Project Goals / The Audience / Industry' },
                        { number: '02', title: 'Prototyping', desc: 'Project Architecture / User Flow / Copywriting' },
                        { number: '03', title: 'Design', desc: 'Design Concept / Idea / Layout' },
                        { number: '04', title: 'Development', desc: 'Tune Up / Technical Implementation / Guidebook / UI Kit' },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center border border-purple-600 gap-2 bg-gradient-to-br from-purple-00 to-purple-900 rounded-4xl p-6 text-white shadow-lg border border-purple-700 h-60">
                            <div className="flex items-start gap-3 justify-center">
                                <div className="flex text-purple-500 text-lg">{item.number}</div>
                                <div className='flex flex-col items-start'>
                                    <div className="text-xl">{item.title}</div>
                                    <div className="text-gray-300 text-sm">{item.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 items-center text-left pb-16 w-[90%] mx-auto gap-10">
                {/* Left Side */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-light leading-snug">
                        LET’S TAKE YOUR
                        <span className="block mt-3 mb-3">
                            BUSINESS TO THE <span className="font-bold">NEXT</span>
                        </span>
                        LEVEL
                    </h3>

                    <div className="flex justify-center md:justify-start ml-[35%]">
                        <a
                            href="/#"
                            className="relative inline-flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-medium transition-transform hover:scale-105"
                        >
                            <p className="text-sm sm:text-base md:text-2xl text-center leading-tight">
                                Start
                                <br />
                                <span>project</span>
                                <br />
                                <span className="text-lg">&#8599;</span>
                            </p>
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative flex justify-center md:justify-end mx-auto w-33 h-60 sm:w-33 sm:h-60 md:w-33 md:h-60 rounded-full bg-gradient-to-b from-purple-600 to-black">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-25 h-25 sm:w-25 sm:h-25 bg-white rounded-full shadow-xl" />
                    <div className="absolute -top-14 sm:-top-14 left-1/2 -translate-x-1/3 w-50 h-100 sm:w-50 sm:h-100 md:w-50 md:h-100">
                        <img
                            src="/assets/hand-pointer.png"
                            alt="3D Hand Pointer"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </section>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 mx-auto w-[90%] gap-8">
                {/* Left Side - Heading */}
                <p className="text-3xl md:text-4xl font-bold md:w-1/3">
                    Get To Know Us
                </p>

                {/* Right Side - Paragraph */}
                <p className="text-base md:text-lg leading-relaxed md:w-2/3">
                    We are a UX/UI company driven by a passion for creating the best possible digital experiences.
                    We have gathered a team of highly talented individuals to help us design the world we want to live in.
                    Our mission is to develop user interfaces and experiences that are intuitive, efficient, and beautiful.
                    We strive to make the digital world a better place, one product at a time.
                </p>
            </div>



            <section className=" py-12">
                <div className="w-[94%] mx-auto">
                    {/* Desktop Layout */}
                    <div className="hidden md:flex gap-3">
                        {/* Left Column */}
                        <div className="flex-[4] flex flex-col gap-4 w-[80%] h-[60%]">
                            <div className="rounded-4xl overflow-hidden w-full h-full">
                                <img src="/assets/working-womens.webp" alt="Team Meeting" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex gap-4 w-[90%] mx-auto h-[70%]">
                                <div className="flex-1 rounded-4xl bg-blue-900 text-white text-base leading-relaxed text-center flex items-center justify-center py-16 px-5">
                                    Your Website<br />Should Be<br />Making Your<br />business Money.
                                </div>
                                <div className="flex-1 rounded-4xl bg-pink-800 text-white text-base leading-relaxed text-center flex items-center justify-center px-6 h-45">
                                    If it<br />Doesn't, we Can<br />Help
                                </div>
                            </div>
                        </div>

                        {/* Middle Column */}
                        <div className="flex-[6] flex gap-4">
                            <div className="flex items-center mb-12">
                                {/* Robot */}
                                <div className="flex-3 rounded-4xl overflow-hidden self-end h-[70%]">
                                    <img src="/assets/robo-block.webp" alt="Robot" className="h-full object-cover" />
                                </div>
                                {/* Right Content */}
                                <div className="flex-[6] flex flex-col gap-4 mt-45">
                                    <div className="flex gap-4">
                                        <div className="flex-1 rounded-3xl bg-teal-700 text-white text-lg leading-relaxed text-center flex items-center justify-center p-6 h-60  w-full mt-50">
                                            we are curious<br />and fearless<br />pioneers.
                                        </div>
                                        <div className="flex-1 rounded-3xl overflow-hidden">
                                            <img src="/assets/lady-block.webp" alt="Woman Standing" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-[4] rounded-3xl overflow-hidden">
                                            <img src="/assets/small-block.webp" alt="Workspace" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-[8] rounded-3xl overflow-hidden">
                                            <img src="/assets/programme.png" alt="Code Screen" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex-[2] flex flex-col  mt-20">
                            <div className="rounded-3xl bg-purple-700 text-white text-base leading-relaxed text-center flex items-center justify-center p-4 h-30 mb-40">
                                New ideas<br />move the world
                            </div>
                            <div className="rounded-3xl bg-pink-600 text-white text-base leading-relaxed text-center flex items-center justify-center p-4 h-100">
                                We are dependable<br />because we<br />hold<br />ourselves accountable.
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="grid grid-cols-2 gap-4 md:hidden">
                        <div className="col-span-2 aspect-[4/3] rounded-3xl overflow-hidden">
                            <img src="/assets/working-womens.webp" alt="Team Meeting" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden">
                            <img src="/assets/robo-block.webp" alt="Robot" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square rounded-3xl bg-purple-700 text-white text-sm leading-relaxed text-center flex items-center justify-center p-4">
                            New ideas<br />move the world
                        </div>
                        <div className="col-span-2 aspect-[3/2] rounded-3xl bg-teal-700 text-white text-base leading-relaxed text-center flex items-center justify-center p-6">
                            we are curious<br />and fearless<br />pioneers.
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden">
                            <img src="/assets/lady-block.webp" alt="Woman Standing" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square rounded-3xl bg-pink-600 text-white text-sm leading-relaxed text-center flex items-center justify-center p-4">
                            We are dependable<br />because we hold<br />ourselves accountable.
                        </div>
                        <div className="aspect-square rounded-3xl bg-blue-900 text-white text-sm leading-relaxed text-center flex items-center justify-center p-4">
                            Your Website<br />Should Be<br />Making Your<br />business Money.
                        </div>
                        <div className="aspect-square rounded-3xl bg-pink-800 text-white text-sm leading-relaxed text-center flex items-center justify-center p-4">
                            If it<br />Doesn't, we Can<br />Help
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden">
                            <img src="/assets/small-block.webp" alt="Workspace" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden">
                            <img src="/assets/programme.png" alt="Code Screen" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white px-6 md:px-20 py-16 space-y-16 mx-w-auto ">
                {/* Section Title */}
                <h2 className=" md:text-5xl font-light">
                    <span className="text-pink-500 font-medium">Values.</span>
                    <span className="text-sky-400">Are we a fit?</span>
                </h2>

                {/* Mission Block */}
                <div className="md:flex md:space-x-80 ">
                    <h3 className="min-w-[150px] text-lg md:text-xl font-light mb-4 md:mb-0">Our Mission</h3>
                    <p className="text-base text-gray-300 max-w-3xl">
                        To empower marketing teams with a future-proof and scalable website, enabling them
                        to become independent of their IT departments.
                    </p>
                </div>

                {/* What You Can Expect */}
                <div className="md:flex md:space-x-70">
                    <h3 className="min-w-[150px] text-lg md:text-xl font-light mb-6 md:mb-0">What You Can Expect</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-gray-300 max-w-5xl">
                        {/* Card 1 */}
                        <div>
                            <h4 className="text-teal-400 text-lg font-semibold mb-2">A strategic mindset</h4>
                            <p>
                                We’re passionate about crafting creative solutions that are tailored to your unique marketing objectives,
                                utilising the best design and technical approaches.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div>
                            <h4 className="text-teal-400 text-lg font-semibold mb-2">Human-centered design</h4>
                            <p>
                                We’ll use creative UX, distinctive UI and impactful animations to craft you a website that stands out
                                from the crowd and sets new standards in your industry.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div>
                            <h4 className="text-teal-400 text-lg font-semibold mb-2">Scalable performance</h4>
                            <p>
                                We provide websites with scalable performance, so you can easily add new content and updates without
                                waiting for a week. Our websites are designed to grow with your content marketing needs, so you can
                                keep up with the latest trends and stay ahead of the competition.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div>
                            <h4 className="text-teal-400 text-lg font-semibold mb-2">T-shaped knowledge</h4>
                            <p>
                                Our focus may be on crafting websites, but our T-shaped knowledge in disciplines like SEO, digital
                                marketing, and other related fields mean they all come together to create a holistic, comprehensive
                                approach.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Focus Statement */}
                <h2 className="text-2xl md:text-5xl font-light text-center mt-30 ">
                    <span className="text-pink-500 font-medium">Focus</span><span className="text-blue-400">.</span>
                    <span className="text-white"> on scaling creativity, driven by</span><br />
                </h2>
                <h2 className="ext-2xl md:text-5xl font-light text-center ">strategic thinking</h2>
                <div className="flex items-center justify-center ">
                    <img src="/assets/focus.svg" alt="Workspace" className=" object-cover w-[45%]" />
                </div>
            </section>
            <section className="relative bg-black text-white py-20 px-4">
                {/* Faint background heading */}
                <div className="relative z-10 text-center mb-12">
                    <p className="text-xl md:text-5xl font-light leading-snug">
                        Three reasons you should contact
                    </p>
                    <h2 className="text-3xl md:text-6xl font-bold text-pink-500 mt-2">
                        CrazyOrbit
                    </h2>
                </div>

                <h1 className="top-10 text-[7vw] opacity-12 z-0 text-center ">
                    WHICH ONE DO YOU NEED?
                </h1>


                {/* Card container */}

                <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full px-4">
                    {/* Card 1 */}
                    <div
                        className="relative bg-cover bg-center rounded-2xl shadow-lg text-center p-6 flex flex-col justify-center"
                        style={{ backgroundImage: "url('/assets/background.webp')" }}
                    >
                        <div className="relative mb-4">
                            <img
                                src="/assets/circle-3.webp"
                                alt="Reason 1"
                                className="relative z-10 mx-auto w-32 h-32 md:w-46 md:h-46 rounded-md"
                            />
                        </div>
                        <p className="text-white text-sm leading-relaxed">
                            “I need to clean up my website, but I need people to see it.”
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="relative bg-cover bg-center rounded-2xl shadow-lg text-center p-6 flex flex-col justify-center"
                        style={{ backgroundImage: "url('/assets/background.webp')" }}
                    >
                        <div className="relative mb-4">
                            <img
                                src="/assets/circle-2.webp"
                                alt="Reason 2"
                                className="relative z-10 mx-auto w-32 h-32 md:w-46 md:h-46 rounded-md"
                            />
                        </div>
                        <p className="text-white text-sm leading-relaxed">
                            “I have something to sell and need to make it available online.”
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="relative bg-cover bg-center rounded-2xl shadow-lg text-center p-6 flex flex-col justify-center"
                        style={{ backgroundImage: "url('/assets/background.webp')" }}
                    >
                        <div className="relative mb-4">
                            <img
                                src="/assets/Circle-1.webp"
                                alt="Reason 3"
                                className="relative z-10 mx-auto w-32 h-32 md:w-46 md:h-46 rounded-md"
                            />
                        </div>
                        <p className="text-white text-sm leading-relaxed">
                            “I have nothing. Give me a basic, simple online presence that showcases my business.”
                        </p>
                    </div>
                </div>




                <div className="relative z-10 text-center mt-14">
                    <a href="#schedule" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-md ">
                        SCHEDULE A CALL
                    </a>
                </div>
            </section>
            <section className="bg-black text-white  h-[95%] w-[95%] mx-auto">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-[45%_40%] gap-55">
                    <div>
                        <img src="https://crazyorbit-dev.netlify.app/img/main-logo.png" alt="Crazy Orbit Logo" className="h-16 mb-7" />
                        <div className="space-y-10 border-white/60 border-b border-t flex items-center justify-between">

                            <ul className="space-y-8 text-2xl py-8">
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Careers</li>
                            </ul>
                            <img src="/assets/social-media-1.svg" alt="Crazy Orbit Logo" className="h-25 w-25"></img>
                        </div>
                        <div className="mt-6 text-lg flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-4">
                            <span className="flex items-center gap-3">
                                <Phone /> 916446947473
                            </span>
                            <span className="flex items-center gap-3">
                                <Mail /> info@crazyorbit.com
                            </span>
                        </div>

                    </div>
                    <div className="border border-white/60 p-5 rounded-none bg-black text-white w-full">
                        <p className="text-[32px] font-light mb-4">Inquire</p>
                        <form className="space-y-4 ">
                            <div className="flex gap-8">
                                <div className="relative flex items-center w-[90%]">
                                    <div className='absolute left-2'><User className='w-6 h-4' /></div>
                                    <input type="text" placeholder="First name*" className="w-[100%] px-3 py-2  pl-8 rounded border border-white/60 bg-transparent placeholder-grey " />
                                </div>
                                <div className="relative flex items-center  w-[90%]">
                                    <div className='absolute left-2'><User className='w-6 h-4' /></div>
                                    <input type="text" placeholder="Last name*" className="w-[100%] px-3 py-2 pl-8 rounded border border-white/60 bg-transparent placeholder-grey" />
                                </div>
                            </div>
                            <div className="relative flex items-center">
                                <div className='absolute left-2'><Mail className='w-4 h-4' /></div>
                                <input type="email" placeholder="Email Address*" className="w-[100%] px-3 py-2 pl-8 rounded border border-white/60 bg-transparent placeholder-grey " />
                            </div>
                            <div className="relative flex items-center">
                                <div className='absolute left-2'><Phone className='w-4 h-4' /></div>
                                <input type="tel" placeholder="Phone Number*" className="w-[100%] px-3 py-2 pl-8 rounded border border-white/60 bg-transparent placeholder-grey " />
                            </div>
                            <div className="relative flex items-center">
                                <div className='absolute left-2'><Send className='w-4 h-4 ' /></div>
                                <textarea placeholder="Message Us*" className="w-[100%] px-3 py-2 pl-8 rounded border border-white/60 bg-transparent placeholder-grey "></textarea>
                            </div>
                            <div className='border border-white/60 w-[20%] h-[10%] '>
                                <button type="submit" className=" text-white/60 px-2 py-3 rounded  ">
                                    Submit →
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="text-center text-2xl text-white/60 mt-20">
                    Copyright © 2025. CrazyOrbit. All Rights Reserved.
                </div>
            </section>
        </div>
    );
}
