import axios from "axios";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [from, user, navigate]);

    if (loading) {
        return (
            <div className="w-40 h-40 mx-auto">
                <Loading></Loading>
            </div>
        );
    }

    const handleSignInWithGoogle = async () => {
        await signInWithGoogle();
    };

    return (
        <div className="container mx-auto py-5">
            <div className="flex items-center max-w-[500px] mx-auto py-5">
                <div className="w-1/2 border-b border-gray-600"></div>
                <p className="mx-5 pb-1">or</p>
                <div className="w-1/2 border-b border-gray-600"></div>
            </div>
            <div className="text-center">
                <p className="text-red-700">
                    {error?.message.split("auth/")[1].split(")"[0])}
                </p>
                <button
                    onClick={handleSignInWithGoogle}
                    className="bg-emerald-400 text-black p-2 px-3 mt-3 rounded hover:bg-emerald-500"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
