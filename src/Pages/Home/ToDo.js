import React from "react";
import { useNavigate } from "react-router-dom";

const ToDo = () => {
    const navigate = useNavigate();
    const handleAddTaskBtn = () => {
        navigate("/addTask");
    };
    return (
        <div className="container mx-auto p-2s py-10">
            <h2 className="text-center">Your Tasks</h2>
            <div className="flex justify-center">
                <button
                    onClick={handleAddTaskBtn}
                    className="btn btn-success text-gray-900"
                >
                    Add New Task
                </button>
            </div>
        </div>
    );
};

export default ToDo;
