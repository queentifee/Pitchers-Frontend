// LoginPage.js
import React from "react";

function LoginPage() {
  return (
    <div
    className="flex justify-center items-center h-screen bg-gray-100"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="w-full max-w-3xl p-8 space-y-6 bg-gray-100 rounded shadow-md">
    <h2 className="text-2xl font-semibold text-center">Log in to Pitchers International</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <button className="w-full py-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700">
            Log In
          </button>
        </form>
        <a href="#" className="text-sm text-center text-blue-500">
          Forgot Password?
        </a>
        <p className="text-center">
          Don’t have an account?{" "}
          <a href="/create-account" className="text-blue-500">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
