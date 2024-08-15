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

import Gundam from '../public/v_1.jpg';

import SummaryWithGallery from "./components/SummeryWithGallery";
import SummaryWithExamples from "./components/SummaryWithExamples";

import { Data } from "./_data";

export default async function Home() {
  const { totalRecords: totalFoodRecords, totalImages: totalFoodImages } = await Data.query.getFoods({});
  const { totalRecords: totalTravelPlaces, totalImages: totalTravelImages } = await Data.query.getTravels({});
  const gundams = await Data.query.getGundams();

  const totalCollections = gundams.length;

  const totalImages = totalFoodImages + totalTravelImages + gundams.reduce((prev, curr) => prev + curr.images.length, 0);

  return (
    <main className="flex flex-col min-h-screen">
      <Hero items={[{ name: 'Total Images', count: totalImages }, { name: 'Restaurants', count: totalFoodRecords }, { name: 'Travel Places', count: totalTravelPlaces }, { name: 'Collection Items', count: totalCollections }]} />
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
      <SummaryWithExamples
        title='COLLECTIONS'
        subtitle='Growing my own kind of collection garden'
        description='Welcome to a showcase of my most cherished collectibles. From the historical allure of collectible coins to the futuristic craftsmanship of Gundam models, each piece reflects a passion for timeless treasures and imaginative design. Dive in and discover the stories behind each unique item in my collection.'
        contents={[
          {
            src: Gundam, link: '/collections/gundam', title: 'Bandai Gundam', subtitle: 'Gundam Plastic models, Gundam Plamo, or Gunpla (ガンプラ, Ganpura) are model kits depicting the mecha machinery and characters of the fictional Gundam multiverse by Bandai. These kits became popular among mecha anime fans and model enthusiasts in Japan and nearby Asian countries beginning in the 1980s. Gundam modeling spread in the 1990s with North America and Europe being exposed to Gundam through television and manga.'
          },
          // { src: Travel2, link: '/', title: 'Coins', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' }
        ]}
        theme='indigo'
      />
    </main>
  );
}
