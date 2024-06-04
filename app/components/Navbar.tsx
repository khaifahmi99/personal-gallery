import { FaRegCircle } from "react-icons/fa6";

import Link from "next/link";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {
  return (
    <div className="navbar w-full absolute top-10 text-zinc-900">
      <div className="flex flex-row justify-between bg-white border-2 border-emerald-400 container mx-auto items-center rounded-2xl py-1">
        <NavbarLogo />
        <ul className="hidden lg:flex flex-row gap-4 px-4">
          <li className="flex items-center group min-w-32 justify-center">
            <Link href='/eats' className="flex flex-row items-center gap-2">
              <div className="group-hover:bg-emerald-400 w-4 h-4 rounded-full"><FaRegCircle /></div>
              <div>EATS</div>
            </Link>
          </li>
          <li className="flex items-center group min-w-32 justify-center">
            <Link href='/travels' className="flex flex-row items-center gap-2">
              <div className="group-hover:bg-emerald-400 w-4 h-4 rounded-full"><FaRegCircle /></div>
              <div>TRAVELS</div>
            </Link>
          </li>
          {/* TODO: Activate collections when section is visible */}
          {/* <li className="flex items-center group min-w-32 justify-center">
            <Link href='/' className="flex flex-row items-center gap-2">
              <div className="group-hover:bg-emerald-400 w-4 h-4 rounded-full"><FaRegCircle /></div>
              <div>COLLECTIONS</div>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}