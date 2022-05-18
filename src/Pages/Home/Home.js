import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Banner from "./Banner";
import ToDo from "./ToDo";

const Home = () => {
    const [user] = useAuthState(auth);
    return <div>{user ? <ToDo></ToDo> : <Banner></Banner>}</div>;
};

export default Home;
