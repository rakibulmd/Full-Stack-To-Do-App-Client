import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        // handleRegister(email, password, name);
    };
    return (
        <div className="container mx-auto py-5">
            <div className="max-w-[500px] mx-auto py-5">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="py-10 px-5 bg-darkbg rounded-md border border-emerald-500"
                >
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Your Name:
                        </label>
                        <input
                            className="border   text-sm rounded-md focus:ring-teal-500  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white  border-teal-500"
                            type="text"
                            placeholder="name"
                            {...register("name", {
                                minLength: 3,
                                required: true,
                            })}
                        />
                        {errors.name && (
                            <span className="text-rose-600">
                                Minimum 3 letters
                            </span>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Your Email:
                        </label>
                        <input
                            className="border   text-sm rounded-md focus:ring-teal-500  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white  border-teal-500"
                            type="email"
                            placeholder="email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className="text-rose-600">
                                Minimum 3 letters
                            </span>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Password (min 6 character):
                        </label>
                        <input
                            className="border   text-sm rounded-md focus:ring-teal-500  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white  border-teal-500"
                            type="password"
                            placeholder="password"
                            {...register("password", {
                                minLength: 6,
                                required: true,
                            })}
                        />
                        {errors.password && (
                            <span className="text-rose-600">
                                Minimum 6 characters
                            </span>
                        )}
                    </div>
                    <input
                        className="w-full bg-emerald-500 hover:bg-emerald-500 px-5 py-2 rounded-md text-black"
                        type="submit"
                        value="Register"
                    />
                    <div className="py-3">
                        <p>
                            Already registered?{" "}
                            <Link
                                className="underline text-emerald-400"
                                to="/login"
                            >
                                Click here to log in...
                            </Link>{" "}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
