"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Authcheck = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/admin/login");
    },
  });
  if (status === "loading") {
    return (
      <div className="mt-16">
        <div className="flex justify-center items-center mt-16">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
export default Authcheck;
