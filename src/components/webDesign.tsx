// "use client";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const WebDesign = () => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-br-firma-regular tracking-tighter mb-2 underline">
        Coding Projects
      </h1>
      <div className="">
        <ul>
          <li className="flex items-center">
            <Link
              href="/"
              className="text-xl tracking-tighter font-br-firma-medium hover:text-gray-500 flex-grow"
            >
              Quote App
            </Link>
            <FontAwesomeIcon width={24} height={24} icon={faChevronRight} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default WebDesign;
