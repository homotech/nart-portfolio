"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import Authcheck from "@/src/components/AuthCheck";

const AdminDashboard = () => {
  const { status, data } = useSession();
  const session = useSession();
  console.log(session);
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/admin/login");
    }
  }, [status]);

  // const { data: session, status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     window.location.href = "/admin/login";
  //     console.log("unauthenticated");
  //   },
  // });

  // const router = useRouter();

  // if (status === "loading") {

  // }
  // if (!session) {
  //   redirect("/admin/login");
  // }
  if (status === "authenticated") {
    redirect("/admin/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg">Loading...</p>
    </div>
  );
};
export default AdminDashboard;
