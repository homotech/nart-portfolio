"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useState, createContext, useEffect } from "react";
import Link from "next/link";

export const AdminContext = createContext({
  draftsID: "",
  setDraftsID: (id: string) => {},
  publishedProjectsID: "",
  setPublishedProjectsID: (id: string) => {},
});

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [draftsID, setDraftsID] = useState("");
  const [publishedProjectsID, setPublishedProjectsID] = useState("");

  return (
    <SessionProvider>
      <AdminContext.Provider
        value={{
          draftsID,
          setDraftsID,
          publishedProjectsID,
          setPublishedProjectsID,
        }}
      >
        <Link href="/admin">Go to Dashboard</Link>
        <main className="flex-1 p-6">{children}</main>
      </AdminContext.Provider>
    </SessionProvider>
  );
};
export default AdminLayout;
