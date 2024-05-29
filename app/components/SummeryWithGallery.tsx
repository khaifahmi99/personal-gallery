import { StaticImageData } from "next/image";
import SummaryHeader, { SummaryHeaderProps } from "./SummaryHeader";
import { ThemeColor } from "./SummaryWithTwoExamples";

interface Props extends SummaryHeaderProps {
  images: StaticImageData[]
}

export default function SummaryWithGallery({ images, theme, ...rest }: Props) {
  const bgClasses = getThemedBackgroundPalette(theme);

  return (
    <div className={`w-full text-zinc-900 pt-16 md:pt-32 ${bgClasses[0]}`}>
      <SummaryHeader {...rest} theme={theme} />

      <div className="grid grid-cols-7 gap-0 border-green-300">
        {bgClasses.slice(1).map((cls, i) => (
          <div key={i} className={`${cls} col-span-1 py-16 md:py-32 px-4 md:px-12 min-h-96 h-full`}>
          </div>  
        ))}
        <div className="absolute w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <div className="flex justify-center items-center h-96 animate-infinite-scroll">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative m-2.5 transition-transform duration-1000 ease-linear transform translate-x-0`}
              >
                <img src={image.src} alt={`Image ${index + 1}`} className="max-w-[200px] rounded shadow" />
              </div>
            ))}
          </div>
          <div 
            aria-hidden="true"
            className="flex justify-center items-center h-96 animate-infinite-scroll"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative m-2.5 transition-transform duration-1000 ease-linear transform translate-x-0`}
              >
                <img src={image.src} alt={`Image ${index + 1}`} className="max-w-[200px] rounded shadow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 
 * Return eight shades of the bg-class (100, 200, 300, 400, 500, 600, 700, 800)
 */
export function getThemedBackgroundPalette(theme: ThemeColor) {
  switch (theme) {
    case 'emerald':
      return ['bg-emerald-100', 'bg-emerald-200', 'bg-emerald-300', 'bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-emerald-800'];
    case 'indigo':
      return ['bg-indigo-100', 'bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-indigo-800'];
    case 'rose':
      return ['bg-rose-100', 'bg-rose-200', 'bg-rose-300', 'bg-rose-400', 'bg-rose-500', 'bg-rose-600', 'bg-rose-700', 'bg-rose-800'];
    case 'amber':
      return ['bg-amber-100', 'bg-amber-200', 'bg-amber-300', 'bg-amber-400', 'bg-amber-500', 'bg-amber-600', 'bg-amber-700', 'bg-amber-800'];
    }
}