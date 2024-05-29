import Hero from "./components/Hero";
import SummaryWithTwoExamples from "./components/SummaryWithTwoExamples";

import Hero1 from '../public/hero_1.jpeg';
import Hero2 from '../public/hero_2.jpeg';
import Hero3 from '../public/hero_3.jpeg';
import SummaryWithGallery from "./components/SummeryWithGallery";
import SummaryWithExamples from "./components/SummaryWithExamples";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <SummaryWithTwoExamples 
        title='TRAVELS' 
        subtitle='Where the dreams meet reality' 
        description='Grow your audience, build long-lasting customer relationships, and make more sales with powerful, easy-to-use marketing tools. Whether you need to offer discount codes or you want to build your email list, you can do it all with Lemon Squeezy.' 
        link='/'
        contents={[
          { src: Hero2, title: 'Athens, Greece', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' },
          { src: Hero3, title: 'Rottnest Island, Australia', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' }
        ]}
        theme='amber'
      />
      <SummaryWithGallery 
        title='FOODS' 
        subtitle='Where the dreams meet reality' 
        description='Grow your audience, build long-lasting customer relationships, and make more sales with powerful, easy-to-use marketing tools. Whether you need to offer discount codes or you want to build your email list, you can do it all with Lemon Squeezy.' 
        link='/'
        theme='rose'
        images={[
          Hero1, Hero1, Hero1,
          Hero1, Hero1, Hero1,
        ]}
      />
      <SummaryWithExamples 
        title='COLLECTIONS' 
        subtitle='Where the dreams meet reality' 
        description='Grow your audience, build long-lasting customer relationships, and make more sales with powerful, easy-to-use marketing tools. Whether you need to offer discount codes or you want to build your email list, you can do it all with Lemon Squeezy.' 
        link='/'
        contents={[
          { src: Hero2, link: '/', title: 'Bandai Gundam', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' },
          { src: Hero3, link: '/', title: 'Books', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' }
        ]}
        theme='indigo'
      />
    </main>
  );
}
