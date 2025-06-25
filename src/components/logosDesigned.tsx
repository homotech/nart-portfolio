import Link from "next/link";
import GsapLogoSlider from "./gsapLogoSlider";
const LogoDesigned = () => {
  return (
    <div className="bg-[#111111] px-4 py-4">
      <h1 className="text-4xl font-br-firma-regular tracking-tighter text-white">
        Here are some{" "}
        <Link href="/logofolio" className="underline">
          logos
        </Link>{" "}
        I have designed.
      </h1>
      <GsapLogoSlider />
    </div>
  );
};
export default LogoDesigned;
