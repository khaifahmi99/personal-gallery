import Image from "next/image";

import SummaryHeader, { SummaryHeaderProps } from "./SummaryHeader";
import { Content, getThemedTextColor } from "./SummaryWithTwoExamples";
import { getThemedBackgroundPalette } from "./SummeryWithGallery";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

interface ContentWithLink extends Content {
  link: string;
}

interface Props extends SummaryHeaderProps {
  contents: ContentWithLink[];
}

export default function SummaryWithExamples({ contents, theme, ...rest }: Props) {
  const textColor = getThemedTextColor(theme);
  const bgClasses = getThemedBackgroundPalette(theme);
  const bgClass1 = bgClasses[0];

  const bgClassSections = bgClasses.slice(1);

  const imagesAndTexts = contents.flatMap((content) => {
    return [
      { type: 'text', title: content.title, subtitle: content.subtitle, link: content.link },
      { type: 'image', image: content.src, link: content.link },
    ]
  })

  return (
    <div className={`w-full text-zinc-900 pt-16 md:pt-32 ${bgClass1}`}>
      <SummaryHeader {...rest} theme={theme} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 justify-items-stretch place-items-center">
        {imagesAndTexts.map((imageOrText, i) => {
          if (imageOrText.type === 'image') {
            return (
              <div
                key={i}
                className={`${bgClassSections[i + 1]} h-full place-items-center min-h-0 lg:min-h-96 p-16 align-center hidden lg:grid`}
              >
                <div className="flex justify-center w-full max-w-lg mr-auto">
                  <Image
                    key={i}
                    src={imageOrText.image!}
                    alt="Image Pane 1"
                    height={256}
                    className="hover:scale-105 hover:-rotate-6 border-2 rounded-lg shadow-md z-10"
                  />
                </div>
              </div>
            )
          } else if (imageOrText.type === 'text') {
            return (
              <div
                key={i}
                className={`col-span-1 lg:col-span-2 ${bgClassSections[Math.round(i / 2)]} h-full place-items-center min-h-96 p-8 lg:p-16`}
              >
                <Link href={imageOrText.link} className='flex flex-col gap-8 text-zinc-900 py-4 justify-center h-full lg:h-fit w-full max-w-5xl ml-auto'>
                  <div className={`flex flex-row gap-4 text-xl cursor-pointer items-center ${textColor}`}>{imageOrText.title}
                    <FaArrowRight />
                  </div>
                  <div>{imageOrText.subtitle}</div>
                </Link>
              </div>
            )
          }

          return <></>
        })}
      </div>
    </div>
  )
}