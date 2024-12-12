import Masonry from "masonry-layout";
import { useEffect } from "react";
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
  { id: 1, image: ImageOne, alt: "" },
  { id: 2, image: ImageTwo, alt: "" },
  { id: 3, image: ImageThree, alt: "" },
  { id: 4, image: ImageFour, alt: "" },
  { id: 5, image: ImageFive, alt: "" },
  { id: 6, image: ImageSix, alt: "" },
  { id: 7, image: ImageSeven, alt: "" },
  { id: 8, image: ImageEight, alt: "" },
];
const MasonryGrid = () => {
  useEffect(() => {
    new Masonry(".grid", {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
      gutter: 16,
    });
  }, []);

  return (
    <div className="box-border grid w-full border border-red-700 grid-cols-auto-fit ">
      <div className="grid-sizer sm:w-1/3 md:w-1/3"></div>
      {Images.map((item) => (
        <div
          className="grid-item sm:w-1/2 lg:w-1/3 mb-8 md:hover:scale-105 transition transition-scale ease-in-out"
          key={item.id}
        >
          <div className="rounded-lg overflow-hidden">
            <Link href="/">
              <Image src={item.image} alt={item.alt} className="w-full"></Image>
            </Link>
          </div>
          <p className="font-br-firma-semibold">Project Name</p>
        </div>
      ))}
      {/* Add more items */}
    </div>
  );
};

export default MasonryGrid;
