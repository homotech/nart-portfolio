"use client";
import Authcheck from "@/src/components/AuthCheck";
import { SessionProvider } from "next-auth/react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Authcheck>{children}</Authcheck>
    </SessionProvider>
  );
};

export default AdminLayout;
