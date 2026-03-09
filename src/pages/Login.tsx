import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert(error.message);
    } else {
      navigate("/dashboard");
    }

  };

  return (

    <div className="min-h-screen bg-[#0F0F1B] flex items-center justify-center text-white">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Login Card */}
      <div className="relative bg-[#1A1A2E] p-10 rounded-xl w-96 shadow-lg border border-gray-800">

        <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">
          FinPilot AI
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Login to your account
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-[#0F0F1B] border border-gray-700 focus:border-purple-500 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-[#0F0F1B] border border-gray-700 focus:border-purple-500 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

        {/* Signup link */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Don't have an account?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>

        {/* Back to home */}
        <p
          className="text-gray-500 text-sm text-center mt-3 cursor-pointer hover:text-gray-300"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </p>

      </div>

    </div>

  );
}