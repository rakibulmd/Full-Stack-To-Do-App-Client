import React from "react";

const Header = () => {
    return (
        <header className="bg-black text-white p-2">
            <nav className="container mx-auto flex justify-between">
                <h2 className="text-emerald-500 text-3xl hover:scale-105">
                    Up Keep
                </h2>
                <button className=" bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 px-8 py-3 rounded">
                    Login
                </button>
            </nav>
        </header>
    );
};

export default Header;
