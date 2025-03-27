import React, { useState } from "react";

const SignupLogin = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleToggle = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                <div
                    className={`flex transition-transform duration-500`}
                    style={{
                        transform: isSignup
                            ? "translateX(-50%)"
                            : "translateX(0)",
                        width: "200%",
                    }}
                >
                    {/* Login Form */}
                    <div className="w-1/2 p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Welcome Back
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    PIN
                                </label>
                                <input
                                    type="password"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <a
                                    href="#"
                                    className="text-sm text-blue-500 hover:underline"
                                >
                                    Forgot PIN?
                                </a>
                                <label className="flex items-center text-sm text-gray-700">
                                    <input type="checkbox" className="mr-1" />{" "}
                                    Remember me
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                            >
                                Login
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm">
                            Don't have an account?{" "}
                            <button
                                onClick={handleToggle}
                                className="text-blue-500 hover:underline"
                            >
                                Create Account
                            </button>
                        </p>
                    </div>
                    {/* Signup Form */}
                    <div className="w-1/2 p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Create Account
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    PIN
                                </label>
                                <input
                                    type="password"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Confirm PIN
                                </label>
                                <input
                                    type="password"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">
                                    Secret Key
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
                            >
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <button
                                onClick={handleToggle}
                                className="text-blue-500 hover:underline"
                            >
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupLogin;
