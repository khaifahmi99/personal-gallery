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
      <SummaryWithTwoExamples 
        title='TRAVELS' 
        subtitle='Where the dreams meet reality' 
        description='Grow your audience, build long-lasting customer relationships, and make more sales with powerful, easy-to-use marketing tools. Whether you need to offer discount codes or you want to build your email list, you can do it all with Lemon Squeezy.' 
        link='/'
        contents={[
          { src: Travel1, title: 'Athens, Greece', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' },
          { src: Travel2, title: 'Rottnest Island, Australia', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' }
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
          Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8,
        ]}
      />
      <SummaryWithExamples 
        title='COLLECTIONS' 
        subtitle='Where the dreams meet reality' 
        description='Grow your audience, build long-lasting customer relationships, and make more sales with powerful, easy-to-use marketing tools. Whether you need to offer discount codes or you want to build your email list, you can do it all with Lemon Squeezy.' 
        link='/'
        contents={[
          { src: Travel1, link: '/', title: 'Bandai Gundam', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' },
          { src: Travel2, link: '/', title: 'Books', subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae voluptates deleniti, quis cum beatae veritatis ipsa eum? Enim cupiditate vel architecto similique eligendi ducimus voluptas velit nostrum eum animi?' }
        ]}
        theme='indigo'
      />
    </main>
  );
}
