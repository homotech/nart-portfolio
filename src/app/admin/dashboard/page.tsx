"use client";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  const handleSignout = () => {
    signOut({ callbackUrl: "/admin/login" });
  };
  return (
    // <Authcheck>
    <div className="mt-24 mb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-br-firma-semibold">Admin Dashboard</h1>
        <button
          onClick={handleSignout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
      <div>{/* Your dashboard content here */}</div>
    </div>
    // </Authcheck>
  );
};
export default Dashboard;
