import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  { title: '1. Idea & Purpose', desc: 'Clarify the goal and purpose of the website.' },
  { title: '2. Research & Inspiration', desc: 'Gather ideas, competitors, trends, and moodboards.' },
  { title: '3. Wireframing & Planning', desc: 'Sketch layout, define structure, and user flow.' },
  { title: '4. UI/UX Design', desc: 'Design high-fidelity screens that are user-friendly and beautiful.' },
  { title: '5. Development', desc: 'Turn designs into code using frontend and backend technologies.' },
  { title: '6. Content Creation', desc: 'Write compelling text, select images, and upload media.' },
  { title: '7. Testing & Debugging', desc: 'Test for bugs, speed, responsiveness, and compatibility.' },
  { title: '8. Deployment & Hosting', desc: 'Push the site live and set up hosting/domain.' },
  { title: '9. Feedback & Iteration', desc: 'Review with client and make adjustments.' },
  { title: '10. Maintenance & Updates', desc: 'Keep site fresh, secure, and functional.' },
];

function CreativeProcess() {
  return (
    <div className="py-26 px-4 md:px-12 bg-gray-200 text-[#111] font-montserrat">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center uppercase mb-12">
        Creative Process
      </h2>

      <div className="flex flex-col items-center gap-12">
        {/* Row 1 (Horizontal) */}
        <div className="flex flex-wrap justify-center gap-6">
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="bg-[#d9b17f] p-6 rounded-xl w-72 shadow-md text-left">
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-white">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Down Arrow */}
        <div className="text-3xl">⬇️</div>

        {/* Row 2 (Vertical) */}
        <div className="flex flex-col items-center gap-6">
          {steps.slice(3, 6).map((step, index) => (
            <div key={index} className="bg-[#d9b17f] p-6 rounded-xl w-72 shadow-md text-left">
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-white">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Side Arrow */}
        <div className="text-3xl">➡️</div>

        {/* Row 3 (Horizontal) */}
        <div className="flex flex-wrap justify-center gap-6">
          {steps.slice(6, 9).map((step, index) => (
            <div key={index} className="bg-[#d9b17f] p-6 rounded-xl w-72 shadow-md text-left">
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-sm text-white">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Down Arrow */}
        <div className="text-3xl">⬇️</div>

        {/* Final Step */}
        <div className="bg-[#d9b17f] p-6 rounded-xl w-72 shadow-md text-left">
          <h3 className="font-bold text-xl mb-2">{steps[9].title}</h3>
          <p className="text-sm text-white">{steps[9].desc}</p>
        </div>
             {/* Call to Action */}
<Link
  to="/start"
  className="mt-12 inline-block max-w-[1400px] mx-auto  bg-[#d9b17f] text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-800 transition"
>
 Get a free Consultation
</Link>
      </div>

 

    </div>
  );
}

export default CreativeProcess;
