"use client";

import { signOut } from "next-auth/react";

const AdminDashboard = () => {
  <div>
    <div>
      <h1 className="text-2xl font-br-firma-semibold">Admin Dashboard</h1>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
    <div></div>
  </div>;
};
export default AdminDashboard;
