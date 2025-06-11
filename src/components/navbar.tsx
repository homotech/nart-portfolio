import Link from "next/link";

const Navbar = () => {
  return (
    <Link
      href="/"
      className="fixed top-0 left-0 px-4 py-4 text-2xl font-br-firma-medium tracking-tighter bg-white w-full"
    >
      Daniel Adonis
    </Link>
  );
};

export default Navbar;
