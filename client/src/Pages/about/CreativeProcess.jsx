import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const steps = [
  { title: 'Idea & Purpose', desc: 'Clarify the goal and purpose of the website.', area: 'Discovery' },
  { title: 'Research & Inspiration', desc: 'Gather ideas, competitors, trends, and moodboards.', area: 'Discovery' },
  { title: 'Wireframing & Planning', desc: 'Sketch layout, define structure, and user flow.', area: 'Architecture' },
  { title: 'UI/UX Design', desc: 'Design high-fidelity screens that are user-friendly and beautiful.', area: 'Architecture' },
  { title: 'Development', desc: 'Turn designs into code using frontend and backend technologies.', area: 'Execution' },
  { title: 'Content Creation', desc: 'Write compelling text, select images, and upload media.', area: 'Execution' },
  { title: 'Testing & Debugging', desc: 'Test for bugs, speed, responsiveness, and compatibility.', area: 'Quality' },
  { title: 'Deployment & Hosting', desc: 'Push the site live and set up hosting/domain.', area: 'Quality' },
  { title: 'Feedback & Iteration', desc: 'Review with client and make adjustments.', area: 'Growth' },
  { title: 'Maintenance & Updates', desc: 'Keep site fresh, secure, and functional.', area: 'Growth' },
];

function CreativeProcess() {
  useEffect(() => {
    document.title = "Our Creative Process | Yohan Labs";
  }, []);

  return (
    <div className="bg-[#f3e9e2] text-[#0d2b35] min-h-screen selection:bg-[#c9886b] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Hero Header - Matching About Page */}
      <section className="pt-32 pb-20 px-6 border-b border-[#0d2b35]/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.8em] uppercase font-bold text-[#c9886b] mb-8">Methodology</p>
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase italic text-[#0d2b35]" style={{ fontFamily: '"Playfair Display", serif' }}>
            A Blueprint <br /> for <span className="text-[#c9886b]">Digital Excellence</span>
          </h1>
        </div>
      </section>

      {/* Main Process Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#0d2b35]/10 border border-[#0d2b35]/10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 md:p-10 min-h-[350px] flex flex-col justify-between hover:bg-[#0d2b35] group transition-all duration-700 ease-in-out"
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-4xl font-black tracking-tighter text-[#c9886b]/30 group-hover:text-[#c9886b] transition-colors" style={{ fontFamily: '"Playfair Display", serif' }}>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] py-1 px-3 border border-[#0d2b35]/10 rounded-full group-hover:border-white/20 group-hover:text-white transition-all">
                      {step.area}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#0d2b35]/70 group-hover:text-[#f3e9e2]/60 transition-colors">
                    {step.desc}
                  </p>
                </div>

                <div className="w-8 h-[1px] bg-[#c9886b] group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout - Deep Teal Section */}
      <section className="py-32 px-6 bg-[#0d2b35] text-[#f3e9e2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-10 tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            We don't just "build" websites. <br />
            <span className="italic text-[#c9886b]">We architect digital experiences.</span>
          </h2>
          <div className="w-20 h-[1px] bg-[#c9886b] mx-auto mb-10"></div>
          <p className="text-lg font-light text-[#f3e9e2]/60 leading-relaxed italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>
      </section>

      {/* Final CTA - Matching About Page Footer */}
      <section className="py-40 px-6 text-center border-t border-[#0d2b35]/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-[#0d2b35] mb-16 tracking-tighter leading-none uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>
            Ready to <br /> Start the <span className="italic text-[#c9886b]">Journey?</span>
          </h2>
          <Link 
            to="/start" 
            className="inline-block bg-[#0d2b35] text-white hover:bg-[#c9886b] font-black py-8 px-20 transition-all tracking-[0.5em] uppercase text-xs shadow-2xl"
          >
            Get a free Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CreativeProcess;