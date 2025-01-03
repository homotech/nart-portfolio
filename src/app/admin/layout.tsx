"use client";
import Authcheck from "@/src/components/AuthCheck";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <main className="flex-1 p-6">{children}</main>
    </SessionProvider>
  );
};
export default AdminLayout;
