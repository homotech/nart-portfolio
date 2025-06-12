import Image from "next/image";
import Payaway from "@/public/Logos/Payaway.svg";
import Omoeta from "@/public/Logos/omoeta.svg";
import Tiqeasy from "@/public/Logos/tiqeasy.svg";
import BOAA from "@/public/Logos/boaa.svg";
import FiBeauty from "@/public/Logos/fi-beauty.svg";
import WHomes from "@/public/Logos/w-homes.svg";

export default function Work() {
  const logos = [
    {
      name: "Payaway",
      src: Payaway,
    },
    {
      name: "Omoeta",
      src: Omoeta,
    },
    {
      name: "Tiqeasy",
      src: Tiqeasy,
    },
    {
      name: "BOAA",
      src: BOAA,
    },
    {
      name: "FiBeauty",
      src: FiBeauty,
    },
    {
      name: "Walter Homes",
      src: WHomes,
    },
  ];
  return (
    <div className="mt-16 px-4">
      <h1 className="text-4xl font-br-firma-bold tracking-tighter mb-4">
        Logo Folio
      </h1>
      <div>
        <p className="font-br-firma-regular tracking-tight  text-gray-600">
          This is a collection of logos I have designed. Each logo is a
          representation of a brand&apos;s identity, crafted with attention to
          detail and creativity.
        </p>
        <div className="flex flex-row flex-wrap gap-4 w-full justify-evenly">
          {logos.map((logo, index) => (
            <Image
              src={logo.src}
              alt={logo.name}
              key={index}
              className="w-16 h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
