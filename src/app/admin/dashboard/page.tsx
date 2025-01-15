"use client";
// import UploadProjects from "@/src/components/uploadProjectsLink";
import { signOut } from "next-auth/react";
import DisplayDrafts from "../drafts/page";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AdminContext } from "../layout";

const Dashboard = () => {
  const { setDraftsID, setPublishedProjectsID } = useContext(AdminContext);

  useEffect(() => {
    setDraftsID("");
    setPublishedProjectsID("");
  }, []);

  const handleSignout = () => {
    signOut({ callbackUrl: "/admin/login" });
  };
  return (
    <div className=" mb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-br-firma-semibold">Admin Dashboard</h1>
        <button
          onClick={handleSignout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
      <div className="my-4">
        <Link
          href="/admin/upload-projects"
          className="w-full block border-2 border-black px-4 py-2 mb-4"
        >
          Upload Project
        </Link>
      </div>
      <div>
        <Link
          href="/admin/drafts"
          className="w-full block border-2 border-black px-4 py-2 mt-4 "
        >
          Go to Drafts
        </Link>
      </div>
      <div>
        <Link
          href="/admin/manage-projects"
          className="w-full block border-2 border-black px-4 py-2 mt-4 "
        >
          Manage Projects
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
