"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import Authcheck from "@/src/components/AuthCheck";

const AdminDashboard = () => {
  const { status, data } = useSession();
  const session = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/admin/login");
    }
  }, [status]);

  if (status === "authenticated") {
    redirect("/admin/dashboard");
  }

  return (
    <div className="flex">
      <p className="text-lg">Loading...</p>
    </div>
  );
};
export default AdminDashboard;
