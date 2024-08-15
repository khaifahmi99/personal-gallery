import Image, { StaticImageData } from "next/image";

import assert from "assert";
import SummaryHeader, { SummaryHeaderProps } from "./SummaryHeader";

export interface Content {
  src: StaticImageData;
  title: string;
  subtitle: string;
}

export type ThemeColor = 'emerald' | 'indigo' | 'rose' | 'amber';

interface Props extends SummaryHeaderProps {
  contents: [Content, Content];
}

export default function SummaryWithTwoExamples({ contents, theme, ...rest }: Props) {
  const bgClasses = getThemedBackgroundPalette(theme);
  const bgClass1 = bgClasses[0];
  const bgClass2 = bgClasses[1];
  const bgClass3 = bgClasses[2];

  return (
    <div className={`w-full text-zinc-900 pt-16 md:pt-32 ${bgClass1}`}>
      <SummaryHeader {...rest} theme={theme} />
      <div className="grid grid-cols-2 gap-0">
        <div className={`flex justify-end col-span-2 md:col-span-1 py-16 md:py-32 px-4 md:px-12 ${bgClass2}`}>
          <div className="flex flex-col xl:flex-row gap-4 max-w-3xl">
            <Image
              src={contents[0].src}
              alt="Image Pane 1"
              height={256}
              className="hover:scale-105 hover:-rotate-6 rounded-lg shadow-md z-10 border-2"
            />
            <div className='flex flex-col gap-4 text-zinc-900 py-4'>
              <div className="font-bold text-xl">{contents[0].title}</div>
              <div className="text-justify">{contents[0].subtitle}</div>
            </div>
          </div>
        </div>
        <div className={`col-span-2 md:col-span-1 py-16 md:py-32 px-4 md:px-12 ${bgClass3}`}>
          <div className="flex flex-col xl:flex-row gap-4 max-w-3xl">
            <Image
              src={contents[1].src}
              alt="Image Pane 2"
              height={256}
              className="hover:scale-105 hover:-rotate-6 rounded-lg shadow-md z-10 border-2"
            />
            <div className='flex flex-col gap-4 text-zinc-900 py-4'>
              <div className="font-bold text-xl">{contents[1].title}</div>
              <div className="text-justify">{contents[1].subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function getThemedTextColor(theme: ThemeColor, clickable?: boolean) {
  if (clickable === undefined) {
    clickable = true; // default to true
  }

  switch (theme) {
    case 'emerald':
      if (clickable) {
        return ['text-emerald-500 hover:text-emerald-700'];
      }
      return ['text-emerald-500']
    case 'indigo':
      if (clickable) {
        return ['text-indigo-500 hover:text-indigo-700'];
      }
      return ['text-indigo-500'];
    case 'rose':
      if (clickable) {
        return ['text-rose-500 hover:text-rose-700'];
      }
      return ['text-rose-500'];
    case 'amber':
      if (clickable) {
        return ['text-amber-500 hover:text-amber-700'];
      }
      return ['text-amber-500'];
  }
}

/**
 * Return three shades of the bg-class (100, 300, 400)
 */
export function getThemedBackgroundPalette(theme: ThemeColor) {
  switch (theme) {
    case 'emerald':
      return ['bg-emerald-100', 'bg-emerald-300', 'bg-emerald-400'];
    case 'indigo':
      return ['bg-indigo-100', 'bg-indigo-300', 'bg-indigo-400'];
    case 'rose':
      return ['bg-rose-100', 'bg-rose-300', 'bg-rose-400'];
    case 'amber':
      return ['bg-amber-100', 'bg-amber-300', 'bg-amber-400'];
  }
}