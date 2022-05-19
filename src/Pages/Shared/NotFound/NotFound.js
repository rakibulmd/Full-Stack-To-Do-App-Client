import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container mx-auto flex justify-center items-center">
            <div className="py-5 text-center">
                <h2 className="text-rose-600 text-3xl font-bold">Error: 404</h2>
                <h3 className="text-emerald-400 text-4xl font-bold animate-pulse">
                    Ops! Page not found.
                </h3>
                <div className="pt-10">
                    <Link
                        to="/home"
                        className="bg-emerald-400 hover:bg-emerald-500 px-6 py-3 rounded-sm text-black mr-5"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
