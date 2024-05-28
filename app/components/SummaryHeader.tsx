import { ThemeColor, getThemedBackgroundPalette, getThemedTextColor } from "./SummaryWithExamples";

export interface SummaryHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;

  theme: ThemeColor;
}

export default function SummaryHeader({ title, link, subtitle, description, theme }: SummaryHeaderProps) {
  const textClass = getThemedTextColor(theme);

  return (
    <div className="container mx-auto pb-16 md:pb-32">
      <a href={link} className={`flex flex-row items-center gap-4 pb-8 ${textClass}`}>
        <div className="text-xl px-2 lg:px-0">{title}</div>
        <div className="text-xl pb-1">{'-->'}</div>
      </a>
      <div className="grid grid-cols-2 gap-2 md:gap-48 items-center">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl md:text-4xl px-2 lg:px-0 font-bold">{subtitle}</h2>
        </div>
        <div className="col-span-2 md:col-span-1 text-zinc-500 px-2 lg:px-0">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

