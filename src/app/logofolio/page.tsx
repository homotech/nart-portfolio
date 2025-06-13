import Image from "next/image";

import logos from "@/src/data/logos";

export default function Work() {
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
