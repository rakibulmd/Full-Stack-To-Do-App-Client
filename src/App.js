import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="font-roboto bg-gray-900 text-white">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
