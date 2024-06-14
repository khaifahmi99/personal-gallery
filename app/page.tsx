import Hero from "./components/Hero";
import SummaryWithTwoExamples from "./components/SummaryWithTwoExamples";

import Food1 from '../public/food1.jpeg';
import Food2 from '../public/food2.jpeg';
import Food3 from '../public/food3.jpeg';
import Food4 from '../public/food4.jpeg';
import Food5 from '../public/food5.jpeg';
import Food6 from '../public/food6.jpeg';
import Food7 from '../public/food7.jpeg';
import Food8 from '../public/food8.jpeg';

import Travel1 from '../public/travel1.jpeg';
import Travel2 from '../public/travel2.jpeg';
import SummaryWithGallery from "./components/SummeryWithGallery";
import SummaryWithExamples from "./components/SummaryWithExamples";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <div id='travels'>
        <SummaryWithTwoExamples 
          title='TRAVELS' 
          subtitle='One pushpin at a time across the globe' 
          description="My mind won't be able to accurately remember places in detail over time, so I captured the memories while the view still stands. Hereby, I elect you to witness the beauty of the world through the lenses of my eyes. This is where dreams meet reality."
          link='/travels'
          contents={[
            { src: Travel1, title: 'Athens, Greece', subtitle: 'Athens is a place where history whispers from every cobblestone.  Towering above the city, the Acropolis beckons you to walk in the footsteps of philosophers and gods.  But Athens is more than just ancient wonders.  Delve into bustling markets overflowing with fresh souvlaki and glistening olives, then lose yourself in the infectious energy of a taverna, clinking glasses with new friends under the warm Greek sun.' },
            { src: Travel2, title: 'Rottnest Island, Australia', subtitle: 'Turquoise waters lap at sugar-white beaches on Rottnest Island, a car-free paradise just off the coast of Perth.  Here, cuddle-buddies reign supreme: the adorable quokka, a marsupial with an ever-present grin, awaits your encounter.  Beyond the wildlife, explore shipwrecks teeming with marine life or soak up the sun on a secluded cove – Rottnest Island is your slice of serenity Down Under.' }
          ]}
          theme='amber'
        />
      </div>
      <div id="eats">
        <SummaryWithGallery 
          title='EATS' 
          subtitle="Looks can be deceiving but these pictures won't!" 
          description="The exhibition of my entire gallery of food I've tasted in the places where I had travelled to; embracing parallelism through visual connection. Meals, cuisines, desserts, and delectables, served on a plate as a feast to the audience."
          link='/eats'
          theme='rose'
          images={[
            Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8,
          ]}
        />
      </div>
      {/* TODO: Activate collections when section is visible */}
      {/* <SummaryWithExamples 
        title='COLLECTIONS' 
        subtitle='Where the dreams meet reality' 
        description='Grow your audience, build long-lasting customer relationships, and make more sales with powerful, easy-to-use marketing tools. Whether you need to offer discount codes or you want to build your email list, you can do it all with Lemon Squeezy.' 
        link='/'
        contents={[
          { src: Travel1, link: '/', title: 'Bandai Gundam', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' },
          { src: Travel2, link: '/', title: 'Books', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' }
        ]}
        theme='indigo'
      /> */}
    </main>
  );
}
