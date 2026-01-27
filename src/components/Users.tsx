import { Album } from 'lucide-react';
import { Users } from 'lucide-react';
import { UserPlus } from 'lucide-react';
import { SquareCode } from 'lucide-react';

export function User() {
    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen space-y-6 border">
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Enter Github User Name"
                    className="border p-2 rounded w-full max-w-sm"
                />
                <button className="bg-blue-500 text-white cursor-pointer px-4 py-2 rounded">
                    Search
                </button>
                <div className="ml-auto text-gray-600">Requests: 60/60</div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded shadow flex justify-center items-center gap-2">
                    <div className="flex items-center justify-center rounded-full bg-red-200 w-12 h-12 cursor-pointer">
                        <Album />
                    </div>
                    <div className="flex flex-col items-center ml-2">
                        <div className="text-pink-500 text-xl font-bold">107</div>
                        <div>Repos</div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded shadow flex justify-center items-center gap-2">
                    <div className="flex items-center justify-center rounded-full bg-teal-200 w-12 h-12 cursor-pointer">
                        <Users />
                    </div>
                    <div className="flex flex-col items-center ml-2">
                        <div className="text-teal-500 text-xl font-bold">246</div>
                        <div>Followers</div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow flex justify-center items-center gap-2">
                    <div className="flex items-center justify-center rounded-full bg-purple-200 w-12 h-12 cursor-pointer">
                        <UserPlus />
                    </div>
                    <div className="flex flex-col items-center ml-2">
                        <div className="text-purple-500 text-xl font-bold">4</div>
                        <div>Following</div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded shadow flex justify-center items-center gap-2">
                    <div className="flex items-center justify-center rounded-full bg-yellow-200 w-12 h-12 cursor-pointer">
                        <SquareCode />
                    </div>
                    <div className="flex flex-col items-center ml-2">
                        <div className="text-yellow-500 text-xl font-bold">111</div>
                        <div>Gists</div>
                    </div>
                </div>
            </div>

            <div className=" grid grid-cols-2 gap-10">
                <div className="bg-white p-4 rounded shadow gap-4" >

                    <div className="flex items-center justify-between pb-10 ml-10 mr-10 ">
                        <div className="flex flex-cols items-center space-x-4 ">
                            <img
                                src="https://avatars.githubusercontent.com/u/16627268?v=4"
                                alt="avatar"
                                className="w-24 h-24 rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-lg">priyanka kommani</p>
                                <p className="text-gray-600 mb-2">@priyanka</p>
                            </div>
                        </div>
                        <div >
                            <button className="ml-auto border border-teal-500 text-teal-500  px-3 py-1 rounded-2xl cursor-pointer">Follow</button>
                        </div>
                    </div>
                    <p className='ml-10 pb-2'>My mission is to train 1 Million SDETs!</p>
                    <div className="mt-2 space-y-1 text-sm ">
                        <div className="flex items-center space-x-2 ml-10">
                            <span>🏢</span>
                            <span>Sauce Labs</span>
                        </div>
                        <div className="flex items-center space-x-2 ml-10">
                            <span>📍</span>
                            <span>Miami, FL</span>
                        </div>
                        <div className="flex items-center space-x-2 ml-10">
                            <span>🔗</span>
                            <a
                                href="https://www.ultimateqa.com"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                www.ultimateqa.com
                            </a>
                        </div>



                    </div>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <div className="font-semibold mb-2">Followers</div>
                    <div className="space-y-2">
                        {[
                            { name: "ThaELL1", url: "https://github.com/ThaELL1" },
                            { name: "Degreeck", url: "https://github.com/degreeck" },
                            { name: "Kemmy91", url: "https://github.com/Kemmy91" },
                            { name: "Alivanoy", url: "https://github.com/alivanoy" },
                        ].map((follower, idx) => (
                            <div
                                key={idx}
                                className="flex items-center space-x-2 border p-2 rounded"
                            >
                                <img
                                    src={`https://github.com/${follower.name}.png`}
                                    alt="follower"
                                    className="h-8 w-8 rounded-full"
                                />
                                <div className="flex flex-col">
                                    <span className="font-medium text-sm">{follower.name}</span>
                                    <a
                                        href={follower.url}
                                        className="text-xs text-blue-500 hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {follower.url}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    
}

