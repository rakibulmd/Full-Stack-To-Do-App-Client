import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogIn = () => {
        navigate("/login");
    };
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <header className="bg-slate-900 text-white p-2 shadow-lg">
            <nav className="container mx-auto flex justify-between">
                <h2 className="text-emerald-500 text-3xl hover:scale-105">
                    Up Keep{" "}
                    {user ? (
                        <span className="text-sm text-white">
                            User: {user?.displayName}
                        </span>
                    ) : (
                        ""
                    )}
                </h2>
                {user ? (
                    <button
                        onClick={handleSignOut}
                        className="bg-orange-500 hover:bg-orange-400 active:bg-orange-600 px-8 py-3 rounded"
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        onClick={handleLogIn}
                        className="bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 px-8 py-3 rounded"
                    >
                        Login
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Header;
