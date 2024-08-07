import Image from "next/image";

import Travel1 from '../../public/travel1.jpeg';
import Travel2 from '../../public/travel2.jpeg';
import Food1 from '../../public/food1.jpeg';
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Counter, { CounterProps } from "./Counter";
import ShineBorder from "@/components/magicui/shine-border";
import BoxReveal from "@/components/magicui/box-reveal";
import { FlipWords } from "@/components/aceternityui/flip-words";

type Props = CounterProps;

export default function Hero(props: Props) {
  return (
    <div className='bg-grid'>
      <section className='w-full pt-48 pb-20 bg-slate-800 bg-radial'>
        <div className='container px-4 mx-auto flex text-zinc-100 flex-col gap-8'>
          <div className='text-2xl lg:text-5xl font-bold text-slate-100 flex flex-col'>
            <span>A Gallery of Experiences:</span>
            <span className="pl-2 md:pl-8"><FlipWords className="text-emerald-400" words={['Foods', 'Travels', 'Collections']} /> That Tell a Story</span>
          </div>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 lg:col-span-7'>
              <div className="text-sm md:text-base py-2 md:py-8 lg:py-12">
                <BoxReveal boxColor={"black"} duration={0.25}>
                  <h2>Welcome to a journey through my experiences!</h2>
                </BoxReveal>
                <BoxReveal boxColor={"black"} duration={0.5}>
                  <>
                    <br /><br />
                    <h2>This gallery is a glimpse into my travels, the delicious food I&lsquo;ve encountered, and the unique collections I&lsquo;ve built along the way. Each image, story, and treasure tells a tale of exploration, discovery, and the joy of finding beauty in the unexpected. Dive in and explore the world through my lens, where every bite, sight, and find becomes a cherished memory.</h2>
                  </>
                </BoxReveal>
              </div>
              <div className='flex flex-col md:flex-row gap-4 pt-4 lg:pt-0'>
                <BoxReveal boxColor={"black"} duration={0.75}>
                  <Link href='/explore' className="group w-full md:w-1/3">
                    <ShineBorder
                      className="text-center uppercase hover:text-emerald-400"
                      color={["#4ade80", "#a78bfa", "#FFBE7B"]}
                      borderWidth={2}
                    >
                      <div className='flex flex-row justify-between items-center px-2 gap-2 text-emerald-400'>
                        <div className='text-lg'>
                          Explore World Map
                        </div>
                        <div className="mr-2 w-4 h-4 group-hover:translate-x-1"><FaArrowRight /></div>
                      </div>
                    </ShineBorder>
                  </Link>
                </BoxReveal>
              </div>
            </div>
            <div className="hidden xl:block xl:col-span-5 justify-self-center relative">
              <Image
                src={Food1}
                alt="Image 1"
                width={192}
                className="hover:scale-110 translate-x-32 translate-y-8 rounded-lg shadow-md z-10 border-2 border-stone-400 hover:border-emerald-400 rotate-12 transition"
              />
              <Image
                src={Travel1}
                alt="Image 2"
                width={192}
                className="hover:scale-110 -translate-x-32 translate-y-16 absolute top-0 rounded-lg shadow-md z-0 border-2 border-stone-400 hover:border-emerald-400 -rotate-6 transition"
              />
              <Image
                src={Travel2}
                alt="Image 3"
                width={192}
                className="hover:scale-110 absolute top-0 rounded-lg shadow-md z-20 border-2 border-stone-400 hover:border-emerald-400 transition"
              />
            </div>
          </div>
          <Counter items={props.items} />
        </div>
      </section>
    </div>
  )
}