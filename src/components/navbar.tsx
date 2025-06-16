import Link from "next/link";

const Navbar = () => {
  return (
    <Link
      href="/"
      className="fixed top-0 left-0 z-99 px-4 py-4 text-xl text-center font-br-firma-medium tracking-tighter bg-white w-full border-b-2 border-gray-800"
    >
      Daniel Adonis
    </Link>
  );
};

export default Navbar;
