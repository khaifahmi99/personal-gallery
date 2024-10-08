import { FaArrowRight } from "react-icons/fa6";
import { ThemeColor, getThemedBackgroundPalette, getThemedTextColor } from "./SummaryWithTwoExamples";
import Link from "next/link";

export interface SummaryHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  link?: string;

  theme: ThemeColor;
}

export default function SummaryHeader({ title, link, subtitle, description, theme }: SummaryHeaderProps) {
  const textClass = getThemedTextColor(theme, !!link);

  return (
    <div className="container mx-auto px-2 pb-16 md:pb-32">
      {link ? (
        <Link href={link} className={`group flex flex-row items-center gap-4 mb-8 ${textClass} w-1/6`}>
          <div className="text-xl px-2">{title}</div>
          <div className="text-xl pb-1 mr-2 group-hover:translate-x-1"><FaArrowRight /></div>
        </Link>
      ) : (
        <div className={`mb-8 ${textClass} text-xl`}>{title}</div>
      )}
      <div className="grid grid-cols-2 gap-2 md:gap-48 items-center">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl md:text-4xl px-2 font-bold">{subtitle}</h2>
        </div>
        <div className="col-span-2 md:col-span-1 text-zinc-500 px-2 text-justify">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

