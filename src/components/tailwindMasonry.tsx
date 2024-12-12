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
    projectName: "Project Name",
    projectHeader: "Project Head",
  },
  {
    id: 2,
    image: ImageTwo,
    alt: "",
    projectName: "Project Name",
    projectHeader: "Project Head",
  },
  {
    id: 3,
    image: ImageThree,
    alt: "",
    projectName: "Project Name",
    projectHeader: "Project Head",
  },
  {
    id: 4,
    image: ImageFour,
    alt: "",
    projectName: "Project Name",
    projectHeader: "Project Head",
  },
  {
    id: 5,
    image: ImageFive,
    alt: "",
    projectName: "Project Name",
    projectHeader: "Project Head",
  },
  {
    id: 6,
    image: ImageSix,
    alt: "",
    projectName: "Project Name",
    projectHeader: "Project Head",
  },
  {
    id: 7,
    image: ImageSeven,
    alt: "",
    projectName: "Project Name",
    projectHeader: "Project Head",
  },
  {
    id: 8,
    image: ImageEight,
    alt: "",
    projectName: "Project Name",
    projectHeader: "Project Head",
  },
];

const TailwindMasonry = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mb-4">
      {Images.map((item) => (
        <div className="mb-4 group overflow-hidden">
          <Link href="/" key={item.id}>
            <Image
              src={item.image}
              alt={item.alt}
              className="w-full rounded-lg mb-2 transition-transform duration-300 group-hover:scale-110"
            ></Image>
          </Link>
          <div className="absolute ">
            <p className="font-br-firma-semibold text-lg">
              {item.projectHeader}
            </p>
            <p className="font-br-firma-semibold text-sm">{item.projectName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TailwindMasonry;
