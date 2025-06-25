import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyFiles = () => {
  const buttonClass =
    "text-black bg-black text-white border-2 border-black font-br-firma-regular text-lg flex items-center px-4 py-2 gap-4 flex-grow";
  return (
    <div className="flex flex-row gap-4 justify-between">
      <a href="/pdfs/Adonis Daniel Resume.pdf" download className={buttonClass}>
        <FontAwesomeIcon icon={faFilePdf} className="w-8 h-8" /> Resume
      </a>
      <a
        href="/pdfs/Adonis Daniel Portfolio.pdf"
        download
        className={buttonClass}
      >
        <FontAwesomeIcon icon={faFilePdf} className="w-8 h-8" /> Portfolio
      </a>
    </div>
  );
};
export default MyFiles;
