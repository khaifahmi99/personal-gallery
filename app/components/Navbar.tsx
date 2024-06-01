import Image from "next/image";
import { FaRegCircle } from "react-icons/fa6";

import Logo from '../../public/logo.png';

export default function Navbar() {
  return (
    <div className="navbar w-full absolute top-10 text-zinc-900">
      <div className="flex flex-row justify-between bg-white border-2 border-emerald-400 container mx-auto items-center rounded-2xl py-1">
        <a href='/' className="flex flex-row gap-4 px-1 items-center">
          <Image src={Logo} width={50} height={50} alt="logo" />
          <h1 className="text-2xl font-bold">Khai's Big World</h1>
        </a>
        <ul className="hidden lg:flex flex-row gap-4 px-4">
          <li className="flex items-center group min-w-32 justify-center">
            <a href='/eats' className="flex flex-row items-center gap-2">
              <div className="group-hover:bg-emerald-400 w-4 h-4 rounded-full"><FaRegCircle /></div>
              <div>FOODS</div>
            </a>
          </li>
          <li className="flex items-center group min-w-32 justify-center">
            <a href='/travels' className="flex flex-row items-center gap-2">
              <div className="group-hover:bg-emerald-400 w-4 h-4 rounded-full"><FaRegCircle /></div>
              <div>TRAVELS</div>
            </a>
          </li>
          {/* TODO: Activate collections when section is visible */}
          {/* <li className="flex items-center group min-w-32 justify-center">
            <a href='/' className="flex flex-row items-center gap-2">
              <div className="group-hover:bg-emerald-400 w-4 h-4 rounded-full"><FaRegCircle /></div>
              <div>COLLECTIONS</div>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}