"use client";
import Authcheck from "@/src/components/AuthCheck";
import { SessionProvider } from "next-auth/react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Authcheck>
        <div>
          <div>{children}</div>
        </div>
      </Authcheck>
    </SessionProvider>
  );
};

export default AdminLayout;
