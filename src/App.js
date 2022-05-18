import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <div className="font-roboto bg-gray-900 text-white">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
}

export default App;
