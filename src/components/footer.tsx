import Image from "next/image";
import Link from "next/link";
import NartLogo from "../../public/nartlogo.svg";
export default function Footer() {
  return (
    <footer className="mt-4">
      <div className="flex gap-4 mx-4">
        <div>
          <Image
            src={NartLogo}
            width="12"
            height="2"
            alt="Nart Single color logo in crayola"
            layout="responsive"
            className=" w-2/12"
          />
        </div>
        <div className="w-3/12">
          <p className="text-crayola font-br-firma-light">Social Links</p>
          <ul>
            {[
              {
                id: 1,
                socialmedia: "Facebook",
                link: "https://web.facebook.com/profile.php?id=100087912974628",
              },
              {
                id: 2,
                socialmedia: "Instagram",
                link: "https://www.instagram.com/nartthedesigner/",
              },
              {
                id: 3,
                socialmedia: "Twitter",
                link: "https://x.com/nartistic999",
              },
              {
                id: 4,
                socialmedia: "LinkedIn",
                link: "https://www.linkedin.com/in/daniel-adonis-6485b7202/",
              },
            ].map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="text-chinese-white text-xs font-br-firma-regular"
                >
                  {item.socialmedia}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/12 ">
          <p className="text-crayola font-br-firma-light">Useful Links</p>
          <ul>
            {["About", "Blog", "contact-us", "portfolio", "review"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`${item.toLowerCase().replace(" ", "-")}`}
                    className="text-xs text-chinese-white font-br-firma-regular capitalize"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
            <Link href="/about">
              <li>about</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex gap-5 justify-center aligh-center py-4 border-t border-off-black font-br-firma-regular">
        <div className="flex justify-end align-center  ">
          <div className="w-3 h-3 bg-go-green rounded-full mr-1 self-center"></div>
          <p className="text-white text-xs">Abuja</p>
        </div>
        <p className="text-white text-xs">© 2024 - Nart the designer</p>
      </div>
    </footer>
  );
}
