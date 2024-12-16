"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/admin",
    });

    if (!result?.ok) {
      setErrors("Invalid Credentials, Please try again.");
    }
  };

  return (
    <div className="mt-16">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-br-firma-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              id="email"
              className="mt-1 border border-gray-200 rounded p-2 w-full"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-br-firma-medium"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              id="password"
              className="mt-1 border border-gray-200 rounded p-2 w-full"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
