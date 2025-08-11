import React from 'react';
import websiteImg from '../../assets/furniq.JPG';
import designImg from '../../assets/turs.jpg';
import performanceImg from '../../assets/earth.jpeg';
import guideImg from '../../assets/muscledistrict.jpg';

function Solution() {
  const solutions = [
    {
      image: websiteImg,
      title: 'Well Built Website and Online Shops',
      text: 'Get a beautiful, easy-to-use website that works smoothly on all devices, built just for your brand or business.',
    },
    {
      image: designImg,
      title: 'We Design to Impress and Engage',
      text: 'We create clean, modern designs that capture attention and make your site easy to navigate and trust.',
    },
    {
      image: performanceImg,
      title: 'We Keep Things Fast, Safe',
      text: 'Your website will load quickly, stay secure, and always run at its best — even after launch, updates, or traffic spikes.',
    },
    {
      image: guideImg,
      title: 'We Guide You Every Step of the Way',
      text: 'Not sure where to start? We’ll help you with the right tools and smart features like payments and bookings.',
    },
  ];

  return (
    <div className="py-10 px-5 bg-gray-200 text-[#090909]">
      

      <div className="flex md:grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-1">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="max-w-[250px] flex-shrink-0 md:min-w-0 bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="min-w-[200px] h-[150px] object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-600 mb-2">{solution.title}</h3>
            <p className="text-gray-800 text-sm">{solution.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
