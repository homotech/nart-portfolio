import Image from "next/image";
import Link from "next/link";
import NartLogo from "../../public/nartlogo.svg";
import SocialLinks from "./socialLinks";
import SubHeader from "./subHeader";

const subheadingClass =
  "text-xs font-br-firma-semibold uppercase text-neutral-500";
const paragraphClass =
  "text-lg md:text-xl tracking-tight underline underline-offset-8 leading-8 md:leading-10 decoration-neutral-300 font-br-firma-regular";
export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-8 md:px-16 bg-neutral-50">
      <div className="container md:flex ">
        {/* Social media  */}
        <div className="mt-4 md:m-0 basis-1/4">
          <SubHeader subheading="Follow"></SubHeader>
          {<SocialLinks paragraphClass={paragraphClass} />}
        </div>
        <div className="mt-8 md:m-0 basis-1/4">
          <SubHeader subheading="Say Hello"></SubHeader>
          <p className={paragraphClass}>
            <Link href="mailto:adonisdaniel931@gmail.com">
              adonisdaniel931@gmail.com
            </Link>
            <br />

            <Link href="tel:+2349014633732">+2349014633732</Link>
          </p>
        </div>
      </div>
      <div className="copyright mt-4">
        <h3 className="uppercase text-xs font-br-firma-semibold">
          © Adonis Daniel 2024
        </h3>
      </div>
    </footer>
  );
}
