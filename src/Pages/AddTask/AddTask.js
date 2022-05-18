import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const AddTask = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (data) => {
        data.status = "incomplete";
        data.email = user?.email;
        console.log(data);
        const post = async () => {
            await axios
                .post("http://localhost:5000/addTask", data)
                .then(toast.success("Task add successful"));
        };
        post();
        reset();
    };
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold uppercase pt-10 text-center">
                Add new task:
            </h2>
            <div className="max-w-[500px] mx-auto py-5">
                <form
                    className="p-5 bg-gray-800 rounded-md border border-emerald-500 animate__animated animate__fadeInUp animate__faster"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-7">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Task Name:
                        </label>
                        <input
                            id="name"
                            className="border   text-sm rounded-md focus:ring-teal-500  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white  border-teal-500"
                            placeholder="Task name here"
                            type="text"
                            autoComplete="off"
                            {...register("taskName", {
                                minLength: 3,
                                required: true,
                            })}
                        />
                        {errors.taskName && (
                            <span className="text-rose-600">
                                Minimum 3 letters
                            </span>
                        )}
                    </div>

                    <div className="mb-7">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Task Description:
                        </label>
                        <textarea
                            id="description"
                            className="border   text-sm rounded-md focus:ring-teal-500  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white  border-teal-500"
                            placeholder="Task description here"
                            type="text"
                            autoComplete="off"
                            {...register("taskDescription", {
                                minLength: 10,
                                required: true,
                            })}
                        />
                        {errors.taskDescription && (
                            <span className="text-rose-600">
                                Description at least 10 letters
                            </span>
                        )}
                    </div>

                    <input
                        className="w-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 px-5 py-2 rounded-md text-black tracking-wide"
                        type="submit"
                        value="Add Item"
                    />
                </form>
                <div className="mx-auto py-5">
                    <Link
                        className="w-full bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-600 px-5 py-2 rounded-md text-black tracking-wide"
                        to="/"
                    >
                        Go to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
