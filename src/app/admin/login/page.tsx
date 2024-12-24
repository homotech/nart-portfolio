"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(false);
    setErrors("");

    try {
      // const result = await signIn("credentials", {
      //   email,
      //   password,
      //   redirect: false,
      //   callbackUrl: "/admin",
      // });
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/admin/login",
      });
      console.log(result);
      // console.log(result);
      if (result?.error) {
        // router.push("/admin");
        setErrors("Invalid Credentials, Please try again.");
      } else if (result?.ok) {
        // Successful login
        router.push("/admin");
        router.refresh(); // Refresh to update session state
      }
    } catch (error) {
      console.log(error);

      setErrors("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16">
      <h1 className="text-center text-2xl font-bold">Admin Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded"
            required
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className={`${
            isLoading ? "bg-neutral-400" : "bg-neutral-500 hover:bg-neutral-600"
          } text-white py-2 px-4 rounded w-full transition-colors`}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log In"}
        </button>
        {errors && <p className="text-red-500 text-center mt-2">{errors}</p>}
      </form>
    </div>
  );
};

export default Login;
