// "use client";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const WebDesign = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-br-firma-medium">Coding Projects</h1>
      </div>
      <div className="text-1xl bg-red-300 flex flex-row items-center">
        <Link href="/" className="bg-gray-100 flex-grow">
          Quote App
        </Link>
        <FontAwesomeIcon width={24} height={24} icon={faChevronRight} />
      </div>
    </div>
  );
};
export default WebDesign;
