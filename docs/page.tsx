"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(""); // Clear previous errors
    setIsLoading(true); // Start loading state

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        // callbackUrl: "/admin",
      });

      if (!result?.ok) {
        setErrors("Invalid Credentials, Please try again.");
      }
    } catch (error) {
      setErrors("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <div className="mt-16 flex justify-center">
      <div className="w-full max-w-md border border-gray-200 rounded p-4 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        {errors && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
            {errors}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              id="email"
              className="mt-1 border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              value={password}
              id="password"
              className="mt-1 border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            disabled={isLoading} // Disable while loading
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
