import Image from "next/image";

import logos from "@/src/data/logos";

export default function Work() {
  return (
    <div className="mt-20">
      <h1 className=" text-4xl font-br-firma-medium tracking-tighter mb-2 px-4">
        Logo Folio
      </h1>
      <div className="">
        <p className="text-lg font-br-firma-regular tracking-tight  text-gray-600 mb-4 px-4">
          This is a collection of logos I have designed. Each logo is a
          representation of a brand&apos;s identity, crafted with attention to
          detail and creativity.
        </p>
        <div className="flex flex-row flex-wrap gap-4 w-full justify-evenly bg-gray-100 px-4 py-6">
          {logos.map((logo, index) => (
            <Image
              src={logo.src}
              alt={logo.name}
              key={index}
              className="w-20 h-20 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
