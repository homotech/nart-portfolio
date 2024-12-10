import Image from "next/image";
import Link from "next/link";
import NartLogo from "../../public/nartlogo.svg";
import SocialLinks from "./socialLinks";
export default function Footer() {
  const subheadingClass =
    "text-xs font-br-firma-semibold uppercase text-neutral-500";
  const paragraphClass =
    "text-lg tracking-tight underline underline-offset-8 leading-8 decoration-neutral-300 font-br-firma-regular";
  return (
    <footer className="mt-4 p-6">
      <div className="">
        {/* Social media  */}
        <div className="mt-4">
          <p className={subheadingClass}>Follow</p>
          {<SocialLinks paragraphClass={paragraphClass} />}
        </div>
      </div>
      <div className="mt-4">
        <p className={subheadingClass}>Say Hello</p>
        <p className={paragraphClass}>
          <Link href="mailto:adonisdaniel931@gmail.com">
            adonisdaniel931@gmail.com
          </Link>
          <br />

          <Link href="tel:+2349014633732">+2349014633732</Link>
        </p>
      </div>
      <div className="copyright mt-4">
        <h3 className="uppercase text-xs font-br-firma-semibold">
          © Adonis Daniel 2024
        </h3>
      </div>
    </footer>
  );
}
