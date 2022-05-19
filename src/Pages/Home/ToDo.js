import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ToDo = () => {
    const [user] = useAuthState(auth);
    const [changed, setChanged] = useState(false);
    const navigate = useNavigate();
    const handleAddTaskBtn = () => {
        navigate("/addTask");
    };
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const get = async () => {
            await axios
                .get(
                    `https://up-keep-server1.herokuapp.com/myTasks?email=${user?.email}`
                )
                .then((response) => {
                    setTasks(response.data);
                });
        };
        get();
    }, [user, changed]);
    const handleCompleteBtn = async (id) => {
        const proceed = window.confirm("Mark as completed?");
        if (proceed) {
            await axios
                .put(`https://up-keep-server1.herokuapp.com/myTasks/${id}`)
                .then((response) => {
                    setChanged(!changed);
                    toast.info("Task is completed, Good Job.");
                });
        }
    };
    const handleDeleteBtn = async (id) => {
        const proceed = window.confirm("Are your sure to delete?");
        if (proceed) {
            await axios.delete(
                `https://up-keep-server1.herokuapp.com/myTasks/${id}`
            );
            const rest = tasks.filter((task) => task._id !== id);
            setTasks(rest);
        }
    };
    return (
        <div className="container mx-auto p-2 py-10">
            <h2 className="text-center text-emerald-500 text-3xl pb-6">
                Your Tasks
            </h2>
            {tasks.length === 0 && (
                <p className=" text-center text-xl py-6">
                    You do not have any task to do!
                </p>
            )}
            {tasks.map((task) => (
                <div
                    className="p-5 bg-gray-800 rounded-lg max-w-[700px] mx-auto py-5 mb-5"
                    key={task._id}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
                        <div className="mb-3">
                            <h2
                                className={
                                    task.status === "completed"
                                        ? `text-xl text-gray-500 line-through`
                                        : `text-xl text-emerald-500`
                                }
                            >
                                Task: {task.taskName}
                            </h2>
                            <p
                                className={
                                    task.status === "completed"
                                        ? `text-xl text-gray-500 line-through`
                                        : `text-xl text-white`
                                }
                            >
                                Description: {task.taskDescription}
                            </p>
                        </div>
                        <div>
                            <button
                                onClick={() => handleCompleteBtn(task?._id)}
                                className={
                                    task.status === "completed"
                                        ? `btn btn-disabled text-gray-500 mr-5`
                                        : `btn btn-success mr-5`
                                }
                            >
                                Completed
                            </button>
                            <button
                                onClick={() => handleDeleteBtn(task?._id)}
                                className="btn btn-error"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
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
