import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "./Pages/AddTask/AddTask";
import VerifyEmail from "./Pages/Login/VerifyEmail";
import RequireAuth from "./Pages/Login/RequireAuth";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
    return (
        <div className="font-roboto bg-gray-900 text-white">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/addTask"
                    element={
                        <RequireAuth>
                            <AddTask></AddTask>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/verifyEmail"
                    element={<VerifyEmail></VerifyEmail>}
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
