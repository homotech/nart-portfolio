import Image from "next/legacy/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";

const categoriesArr = ["all", "brand identity", "poster", "illustrations"];
interface Project {
  id: string;
  image: StaticImageData;
  category: string;
  alt: string;
  title: string;
  description: string;
}

const TailwindMasonry = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const filteredPojects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        const fetchedProjects = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            // id: doc.id,
            // image: data.image,
            // category: data.category,
            // alt: data.alt,
            // projectDesc: data.projectDesc,
            // projectHeader: data.projectHeader,
            ...data,
          };
        });
        console.log(fetchedProjects);
        setProjects(fetchedProjects);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="">
      <div className="flex mx-auto w-full mb-4 gap-4 overflow-scroll md:overflow-hidden">
        {categoriesArr.map((item) => (
          <button
            key={item}
            onClick={() => {
              console.log(item);
              setSelectedCategory(item);
            }}
            className={`uppercase text-xs px-4 py-2 rounded-full transform-opacity duration-300 whitespace-nowrap ${
              selectedCategory === item && "bg-black text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      {!isLoading ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mb-4">
          {filteredPojects.map((item) => (
            <div
              className="mb-4 group overflow-hidden relative rounded-lg cursor-pointer"
              key={item.id}
            >
              <Link href="/" className="relative" key={item.id}>
                {/* {item.images.map((item) => (
                  <Image
                    src={item.url}
                    layout="fill"
                    objectFit="cover"
                    alt="Uploaded Image"
                    className="rounded-lg w-full transition-transform duration-300 group-hover:scale-110"
                  ></Image>
                ))} */}
                {/* <div className="relative"> */}
                {/* <Image
                  src={item.thumbnail}
                  // alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="w-full transition-transform duration-300 group-hover:scale-110"
                ></Image> */}
                {/* </div> */}
                <div className="relative w-full h-64 group overflow-hidden rounded-lg">
                  <Image
                    src={item.thumbnail}
                    alt={item.alt || "Image thumbnail"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transform-opacity group-hover:opacity-100 text-white duration-300 flex flex-col justify-center items-center ">
                <p className="font-br-firma-semibold text-3xl text-center">
                  {item.title}
                </p>
                <p className="font-br-firma-semibold text-center w-2/3 text-sm my-2">
                  {item.description}
                </p>
                <Link
                  href={`/projects/${item.id}`}
                  className="px-4 py-2 bg-white text-black font-br-firma-regular text-base rounded-lg"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
export default TailwindMasonry;
