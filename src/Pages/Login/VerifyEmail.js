import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const VerifyEmail = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (
            user?.providerData[0]?.providerId === "password" &&
            user?.emailVerified
        ) {
            navigate(from, { replace: true });
            toast.success("Signed In Successfully.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    }, [from, user, navigate]);
    return (
        <div className="container mx-auto text-center py-10">
            <h2 className="text-xl text-rose-600 font-bold pb-5">
                Email is not verified!
            </h2>
            <h2>Please check your email inbox & verify</h2>
            <p className="py-3">
                Already verified?{" "}
                <button
                    onClick={() => window.location.reload(false)}
                    className="bg-emerald-500 hover:bg-teal-500 px-5 py-2 rounded-md text-black"
                >
                    Refresh
                </button>{" "}
            </p>
        </div>
    );
};

export default VerifyEmail;
