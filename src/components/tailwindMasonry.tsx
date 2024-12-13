import ImageOne from "../../public/image-one.png";
import ImageTwo from "../../public/image-two.jpg";
import ImageThree from "../../public/image-three.jpeg";
import ImageFour from "../../public/image-four.jpeg";
import ImageFive from "../../public/image-five.jpeg";
import ImageSix from "../../public/image-six.jpeg";
import ImageSeven from "../../public/image-seven.jpeg";
import ImageEight from "../../public/image-eight.jpeg";
import Image from "next/image";
import Link from "next/link";

const Images = [
  {
    id: 1,
    image: ImageOne,
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 2,
    image: ImageTwo,
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 3,
    image: ImageThree,
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 4,
    image: ImageFour,
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 5,
    image: ImageFive,
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 6,
    image: ImageSix,
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 7,
    image: ImageSeven,
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
  {
    id: 8,
    image: ImageEight,
    alt: "",
    projectDesc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    projectHeader: "Project Head",
  },
];

const TailwindMasonry = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mb-4">
      {Images.map((item) => (
        <div className="mb-4 group overflow-hidden relative rounded-lg ">
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
