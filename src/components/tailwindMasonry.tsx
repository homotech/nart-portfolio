import ImageOne from "../../public/image-one.jpg";
import ImageTwo from "../../public/image-two.png";
import ImageThree from "../../public/image-three.jpg";
import ImageFour from "../../public/image-four.png";
import ImageFive from "../../public/image-five.png";
import ImageSix from "../../public/image-six.jpg";
import ImageSeven from "../../public/image-seven.jpg";
import ImageEight from "../../public/image-eight.png";
import ImageNine from "../../public/image-nine.png";
import ImageTen from "../../public/image-ten.png";
import ImageEleven from "../../public/image-eleven.png";
import ImageTwelve from "../../public/image-twelve.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Projects = [
  {
    id: 1,
    image: ImageOne,
    category: "brand identity",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 2,
    image: ImageTwo,
    category: "poster",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 3,
    image: ImageThree,
    category: "brand identity",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 4,
    image: ImageFour,
    category: "poster",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 5,
    image: ImageFive,
    category: "poster",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 6,
    image: ImageSix,
    category: "brand identity",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 7,
    image: ImageSeven,
    category: "brand identity",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 8,
    image: ImageEight,
    category: "poster",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 9,
    image: ImageNine,
    category: "poster",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 10,
    image: ImageTen,
    category: "poster",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 11,
    image: ImageEleven,
    category: "poster",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 12,
    image: ImageTwelve,
    category: "poster",
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
];

const categoriesArr = [
  "all",
  "brand identity",
  "poster",
  "website design",
  "illustrations",
];

const TailwindMasonry = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPojects =
    selectedCategory === "all"
      ? Projects
      : Projects.filter((project) => project.category === selectedCategory);
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mb-4">
      <div>
        {categoriesArr.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedCategory(item)}
            className={`text-uppecase px-4 py-2 `}
          >
            {item}
          </button>
        ))}
      </div>
      {filteredPojects.map((item) => (
        <div className="mb-4 group overflow-hidden relative rounded-lg cursor-pointer ">
          <Link href="/" key={item.id}>
            <Image
              src={item.image}
              alt={item.alt}
              className="w-full transition-transform duration-300 group-hover:scale-110"
            ></Image>
          </Link>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transform-opacity group-hover:opacity-100 text-white duration-300 flex flex-col justify-center items-center ">
            <p className="font-br-firma-semibold text-3xl">
              {item.projectHeader}
            </p>
            <p className="font-br-firma-semibold text-center w-2/3 text-sm my-2">
              {item.projectDesc}
            </p>
            <Link
              href="/"
              className="px-4 py-2 bg-white text-black font-br-firma-regular text-base rounded-lg"
            >
              View Project
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TailwindMasonry;
