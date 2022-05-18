import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-gray-900 text-white py-10 text-center mt-14">
            <p className="uppercase text-emerald-400 tracking-widest">
                UP KEEP is a simple task management APp
            </p>
            <h2 className="font-bold text-3xl md:text-6xl pt-7">Easy to use</h2>
            <h2 className="font-bold text-2xl md:text-4xl pt-3">
                Add, complete, delete, enjoy!
            </h2>
            <p className="text-gray-400 font-semibold text-lg md:text-xl pt-7 tracking-wide mb-5">
                Do not lose any of your progress or data!
            </p>
            <div className="pt-10 text-center">
                <Link
                    to="/login"
                    className="inline-block mx-2 bg-teal-600 hover:bg-teal-500 active:bg-teal-700 px-6 py-3 rounded-sm "
                >
                    Start Using ToDos
                </Link>
            </div>
        </div>
    );
};

export default Banner;
