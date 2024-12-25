import { ModeToggle } from "@/components/BoutonDarkMode";
import Link from "next/link";
import { FcGlobe } from "react-icons/fc";

export default function Navbar() {
  return (
<nav className="w-3/4 mx-auto bg-purple-400 h-14 rounded-xl mt-4">
<div className="flex justify-around h-full items-center">
<Link href="/"> <FcGlobe className="text-3xl"></FcGlobe></Link>
<Link href="/crud" className="font-bold text-2xl">Crud </Link>
<Link href="/listecrud" className="font-bold text-2xl">Liste-Crud</Link>
 <ModeToggle></ModeToggle>
</div>
</nav>
  );
}