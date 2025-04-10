import Volunteers from "../../../public/Volunteers.webp";
import Image from "next/image";
const ContactUs = () => {
  return (
    <div className="mt-16">
      <Image
        src={Volunteers}
        alt="A Volunteers design"
        width={600}
        height={600}
        className="border border-red border-2 overflow-hidden"
      />
    </div>
  );
};

export default ContactUs;
