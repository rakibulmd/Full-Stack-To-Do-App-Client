import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Banner from "./Banner";

const Home = () => {
    const [user] = useAuthState(auth);
    return <div>{user ? "" : <Banner></Banner>}</div>;
};

export default Home;
