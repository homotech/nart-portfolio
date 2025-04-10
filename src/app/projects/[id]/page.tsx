// "use client";
// // import { db } from "@/firebaseConfig";
// import { CircularProgress } from "@mui/material";
// // import { doc, getDoc } from "firebase/firestore";
// import Image from "next/image";
// // import { useRouter, useParams } from "next/ro";
// import { Key, useEffect, useState } from "react";

// interface Params {
//   id: string;
// }

// const ProjectPage = ({ params }: { params: Params }) => {
//   // const router = useRouter();
//   const id = params.id;
//   const [project, setProject] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   // useEffect(() => {
//   //   if (id) {
//   //     console.log("Green Light:", id);
//   //     const fetchProjects = async () => {
//   //       try {
//   //         const docRef = doc(db, "test", id);
//   //         const docSnap = await getDoc(docRef);

//   //         if (docSnap.exists()) {
//   //           console.log(docSnap.data());
//   //           setProject(docSnap.data());
//   //         } else {
//   //           console.log("No such Document");
//   //         }
//   //       } catch (error) {
//   //         console.error("Error fetching project:", error);
//   //         setErrorMessage("Failed to load project");
//   //       } finally {
//   //         setIsLoading(false);
//   //       }
//   //     };
//   //     fetchProjects();
//   //   }
//   // }, [id]);

//   if (isLoading) {
//     return (
//       <div className="mt-16 mx-4">
//         <CircularProgress />
//       </div>
//     );
//   }

//   if (errorMessage) {
//     return (
//       <div className="mt-16 mx-4">
//         <h1>{errorMessage}</h1>
//       </div>
//     );
//   }

//   return project ? (
//     <div className="mt-16 mx-4">
//       <h1 className="font-br-firma-semi-bold text-4xl tracking-tight my-4">
//         {project.title}
//       </h1>
//       <p className="text-xl font-br-firma-regular mb-4">
//         {project.description}
//       </p>
//       {Array.isArray(project.images) ? (
//         project.images.map(
//           (
//             image: { url: string | undefined },
//             index: Key | null | undefined
//           ) => (
//             <div className="w-full overflow-hidden rounded-lg mb-4" key={index}>
//               <Image
//                 src={image.url || "/placeholder.png"}
//                 className=""
//                 alt="Image thumbnail"
//               />
//             </div>
//           )
//         )
//       ) : (
//         <div>
//           <p>No Images available</p>
//         </div>
//       )}
//     </div>
//   ) : (
//     <div className="mt-16">
//       <h1>Project not found</h1>
//     </div>
//   );
// };
// export default ProjectPage;

// /app/projects/[id]/page.tsx

interface Params {
  id: string;
}

const ProjectPage = ({ params }: { params: Params }) => {
  return (
    <div className="mt-16">
      <h1>Project Page</h1>
      <p>This is the project page for ID: {params.id}</p>
    </div>
  );
};

export default ProjectPage;

// This tells Next.js to pre-render these routes during build
export async function generateStaticParams() {
  // Dummy IDs — replace with real ones later
  const ids = ["1", "2", "3"];

  return ids.map((id) => ({
    id,
  }));
}
