import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import Banner from "./Banner";
import ToDo from "./ToDo";

const Home = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return (
            <div className="w-40 h-40 mx-auto">
                <Loading></Loading>
            </div>
        );
    }
    return <div>{user ? <ToDo></ToDo> : <Banner></Banner>}</div>;
};

export default Home;
