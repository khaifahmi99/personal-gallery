'use client';

import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function PaginationControl({ currentPage, totalPages }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const onNextPage = (currentPage: number) => {
    const nextPage = currentPage + 1;
    replace(`${pathname}?page=${nextPage}`);
  }

  const onPreviousPage = (currentPage: number) => {
    const previousPage = currentPage - 1;
    replace(`${pathname}?page=${previousPage}`);
  }

  return (
    <div className="grid grid-cols-2 w-full text-white text-5xl">
      <div 
        onClick={() => {
          if (currentPage === 1) {
            return;
          }

          onPreviousPage(currentPage);
        }}
        className={currentPage === 1 ? 'opacity-25' : 'opacity-75 hover:opacity-100 cursor-pointer'}
        >
          <FaArrowLeft />
        </div>
        <div 
          onClick={() => {
            if (currentPage === totalPages) {
              return;
            }

            onNextPage(currentPage);
          }}
          className={currentPage === totalPages ? 'opacity-25 justify-self-end' : 'opacity-75 hover:opacity-100 cursor-pointer justify-self-end'}><FaArrowRight />
        </div>
      </div>
  )

}