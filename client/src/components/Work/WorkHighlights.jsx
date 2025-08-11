import React from 'react';
import earth from '../../assets/earth.jpeg';
import turs from '../../assets/turs.jpg';
import muscleDistrict from '../../assets/muscledistrict.jpg';
import kashio from '../../assets/kashio.jpg';
import furniq from '../../assets/furniq.jpg';

function WorkHighlights() {
  return (
    <div className="bg-[#090909] text-white mt-0">

      {/* Project 1 */}
      <section className="flex flex-wrap justify-between items-center gap-[60px] px-10 py-[60px] my-[60px] max-w-[1400px] mx-auto rounded-2xl  bg-transparent">
        <div className="flex-1 min-w-[280px]">
          <p className="text-[3rem] md:text-[5rem] font-black text-white mb-5 leading-tight uppercase font-[Montserrat]">
            Forked <br /> Up
          </p>
          <p className="text-[1rem] md:text-[1.2rem] text-gray-400 font-medium leading-[1.7] max-w-[520px] font-[Montserrat]">
            An online hub that showcases the menu, ambiance, location, and services, allowing customers to explore, book, and connect with the dining experience.
          </p>
        </div>
        <a
          href="https://forkedup-phi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={earth}
            alt="Forked Up"
            className="w-full h-auto rounded-xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </a>
      </section>

      {/* Project 2 */}
      <section className="flex flex-wrap-reverse justify-between items-center gap-[60px] px-10 py-[60px] my-[60px] max-w-[1400px] mx-auto rounded-2xl  bg-transparent">
        <a
          href="https://turs120.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={turs}
            alt="Upper Room Sanctuary"
            className="w-full h-auto rounded-xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </a>
        <div className="flex-1 min-w-[280px]">
          <p className="text-[3rem] md:text-[5rem] font-black text-white mb-5 leading-tight uppercase font-[Montserrat] text-right">
            Upper Room <br /> Sanctuary
          </p>
          <p className="text-[1rem] md:text-[1.2rem] text-gray-400 font-medium leading-[1.7]  font-[Montserrat] text-right">
            A digital platform that shares the church's mission, events, sermons, and ways for people to connect, worship, and grow in faith.
          </p>
        </div>
      </section>

      {/* Project 3 */}
      <section className="flex flex-wrap justify-between items-center gap-[60px] px-10 py-[60px] my-[60px] max-w-[1400px] mx-auto rounded-2xl  bg-transparent">
        <div className="flex-1 min-w-[280px]">
          <p className="text-[3rem] md:text-[5rem] font-black text-white mb-5 leading-tight uppercase font-[Montserrat]">
            Muscle <br /> District
          </p>
          <p className="text-[1rem] md:text-[1.2rem] text-gray-400 font-medium leading-[1.7] max-w-[520px] font-[Montserrat]">
            A local gym website showcasing powerful training programs, expert coaching, and membership options designed to help you build strength and stay motivated.
          </p>
        </div>
        <a
          href="https://muscle-district.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={muscleDistrict}
            alt="Muscle District"
            className="w-full h-auto rounded-xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </a>
      </section>

      {/* Project 4 */}
      <section className="flex flex-wrap-reverse justify-between items-center gap-[60px] px-10 py-[60px] my-[60px] max-w-[1400px] mx-auto rounded-2xl  bg-transparent">
        <a
          href="https://kashiobubbles.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={kashio}
            alt="Kashio Bubbles"
            className="w-full h-auto rounded-xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </a>
        <div className="flex-1 min-w-[280px]">
          <p className="text-[3rem] md:text-[5rem] font-black text-white text-right mb-5 leading-tight uppercase font-[Montserrat]">
            Kashio <br /> Bubbles
          </p>
          <p className="text-[1rem] md:text-[1.2rem] text-gray-400 font-medium leading-[1.7] text-right font-[Montserrat]">
            A modern laundromat website offering convenient, fast, and affordable laundry services with online scheduling and doorstep pickup.
          </p>
        </div>
      </section>


     {/* Project 5 */}
      <section className="flex flex-wrap-reverse justify-between items-center gap-[60px] px-10 py-[60px] my-[60px] max-w-[1400px] mx-auto rounded-2xl  bg-transparent">
      
        <div className="flex-1 min-w-[280px]">
          <p className="text-[3rem] md:text-[5rem] font-black text-white mb-5 leading-tight uppercase font-[Montserrat]">
            Furniq <br /> works
          </p>
          <p className="text-[1rem] md:text-[1.2rem] text-gray-400 font-medium leading-[1.7] max-w-[520px] font-[Montserrat]">
            A modern furniture store offering stylish, affordable, and high-quality pieces for every space — with seamless online shopping and doorstep delivery.
          </p>
        </div>

          <a
          href="https://furniq-five.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[550px] transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={furniq}
            alt="Furniq Works"
            className="w-full h-auto rounded-xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </a>
      </section>
    </div>
  );
}

export default WorkHighlights;
