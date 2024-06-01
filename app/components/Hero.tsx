import Image from "next/image";

import Travel1 from '../../public/travel1.jpeg';
import Travel2 from '../../public/travel2.jpeg';
import Food1 from '../../public/food1.jpeg';
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className='w-full py-48'>
      <div className='container mx-auto flex text-zinc-100 flex-col gap-8'>
        <h1 className='text-2xl lg:text-5xl font-bold text-emerald-400'>
          A Gallery of Experiences:<br />Travel, Food & Collections That Tell a Story
        </h1>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 lg:col-span-7'>
            <div className="py-8 lg:py-12">
              <h2>Welcome to a journey through my experiences!<br /><br />This gallery is a glimpse into my travels, the delicious food I&lsquo;ve encountered, and the unique collections I&lsquo;ve built along the way. Each image, story, and treasure tells a tale of exploration, discovery, and the joy of finding beauty in the unexpected. Dive in and explore the world through my lens, where every bite, sight, and find becomes a cherished memory.</h2>
            </div>
            {/* TODO: Handle onClick */}
            <div className="hover:bg-emerald-100 w-4/5 md:w-1/3 cursor-pointer flex flex-row justify-between text-zinc-900 px-4 py-2 bg-white rounded border-emerald-400 border-2 items-center">
              <div className='text-lg'>
                Explore More
              </div>
              <div className="w-4 h-4"><FaArrowRight /></div>
            </div>
          </div>
          <div className="hidden xl:block xl:col-span-5 justify-self-center relative">
            <Image
              src={Food1}
              alt="Image 1"
              width={192}
              className="hover:scale-110 translate-x-32 translate-y-8 rounded-lg shadow-md z-10 border-2 border-emerald-400 rotate-12 transition"
            />
            <Image
              src={Travel1}
              alt="Image 2"
              width={192}
              className="hover:scale-110 -translate-x-32 translate-y-16 absolute top-0 rounded-lg shadow-md z-0 border-2 border-emerald-400 -rotate-6 transition"
            />
            <Image
              src={Travel2}
              alt="Image 3"
              width={192}
              className="hover:scale-110 absolute top-0 rounded-lg shadow-md z-20 border-2 border-emerald-400 transition"
            />
          </div>
        </div>
      </div>
    </section>
  )
}