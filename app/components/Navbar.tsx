import Image from "next/image";

import Logo from '../../public/logo.png';

export default function Navbar() {
  return (
    <div className="navbar w-full absolute top-10 text-zinc-900">
      <div className="flex flex-row bg-white border-2 border-emerald-400 container mx-auto items-center rounded-2xl py-1">
        <a href='/' className="flex flex-row gap-4 px-1 items-center">
          <Image src={Logo} width={50} height={50} alt="logo" />
          <h1 className="text-2xl font-bold">Khai's Big World</h1>
        </a>
      </div>
    </div>
  );
}