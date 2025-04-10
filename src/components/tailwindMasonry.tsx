import Image from "next/legacy/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const categoriesArr = ["all", "brand identity", "poster", "illustrations"];
interface Project {
  id: string;
  image: StaticImageData;
  category: string;
  alt: string;
  title: string;
  description: string;
  thumbnail: string;
}

const TailwindMasonry = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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
            id: doc.id,
            image: data.image as StaticImageData,
            category: data.category,
            alt: data.alt,
            title: data.title,
            description: data.description,
            thumbnail: data.thumbnail,
          } as Project;
        });
        setProjects(fetchedProjects);
        if (projects) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError((error as any).msg);
        setIsLoading(false);
      }
    };
    fetchProjects();
    console.log(isLoading);
  });
  if (!isLoading && !error) {
    return (
      <div className="mb-4">
        <div className="flex w-full mb-4 gap-4 flex-wrap">
          {categoriesArr.map((item) => (
            <button
              key={item}
              onClick={() => {
                console.log(item);
                setSelectedCategory(item);
              }}
              className={`text-2xl font-br-firma-regular transform-color duration-300 capitalize whitespace-nowrap ${
                selectedCategory === item ? "text-black" : "text-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {/* {!isLoading ? ( */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredPojects.map((item) => (
            <div
              className="mb-4 group overflow-hidden relative rounded-lg cursor-pointer"
              key={item.id}
            >
              <Link href="/" className="block w-full relative" key={item.id}>
                <div className="relative w-full h-auto group overflow-hidden rounded-lg">
                  <Image
                    src={item.thumbnail.replace(/\.(png|jpg|jpeg)$/, ".webp")}
                    alt="image thumbnail"
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110 rounded-lg"
                  />
                  {/* <Image
                    src={item.thumbnail}
                    alt={item.alt || "Image thumbnail"}
                    // width={400}
                    // height={9}
                    layout="intrinsic"
                    // layout="fill"
                    // objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  /> */}
                </div>
              </Link>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transform-opacity group-hover:opacity-100 text-white duration-300 flex flex-col p-4 justify-between">
                <div className="flex justify-end ">
                  <Link
                    href={`/projects/${item.id}`}
                    className="px-4 py-1 bg-white overflow-hidden rounded-full text-black font-br-firma-regular flex items-center gap-4 transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      // size="2x"
                    />
                    <span className="whitespace-nowrap">View Project</span>
                  </Link>
                </div>
                <div>
                  <p className="font-br-firma-semibold text-3xl tracking-tight leading-8">
                    {item.title}
                  </p>
                  <p className="font-br-firma-regular tracking-tight w-2/3 text-sm my-2 leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mx-4 mt-16">
        <CircularProgress />
      </div>
    );
  }

  if (!isLoading && error) {
    return (
      <div>
        <h1>There was an error loding projects</h1>
        <button className="bg-black text-white px-4 py-2">Reload Page</button>
      </div>
    );
  }
};
export default TailwindMasonry;
