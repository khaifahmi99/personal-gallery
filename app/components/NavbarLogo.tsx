'use client';

import Link from "next/link";
import Image from "next/image";

import Logo from '../../public/logo.png';
import { usePathname } from "next/navigation";

export default function NavbarLogo() {
  const pathname = usePathname();
  const lastLayer = pathname.split('/').at(-1);

  return (
    <div className="flex flex-row gap-2 px-1 items-center">
      <Link href='/'>
        <Image src={Logo} width={50} height={50} alt="logo" />
      </Link>
      {pathname === '/' ? (
        <h1 className="text-2xl font-bold">Khai&lsquo;s Big World</h1>
      ) : (
        <div className="flex flex-row gap-2 text-zinc-900 text-2xl uppercase">
          <h2>/</h2>
          {lastLayer}
        </div>
        
      )}
    </div>
  )
}