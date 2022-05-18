import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="w-40 h-40 mx-auto">
                    <h2>Loading</h2>
                </div>
            </div>
        );
    }
    if (
        user?.providerData[0]?.providerId === "password" &&
        !user?.emailVerified
    ) {
        return (
            <Navigate
                to="/verifyEmail"
                state={{ from: location }}
                replace
            ></Navigate>
        );
    }
    if (!user) {
        return (
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }

    return children;
};

export default RequireAuth;
