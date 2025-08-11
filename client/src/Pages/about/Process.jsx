import React from 'react';
import { useLocation } from 'react-router-dom';
import workflow from '../../assets/workflow.jpeg';
import communication from '../../assets/communication.jpeg'; 
import requirements from '../../assets/requirements.jpeg'; 

function Process() {
  const location = useLocation();
  const isLightThemeRoute = ['/about', '/services', '/about/creative-process'].includes(location.pathname);

  return (
    <div
      className={`w-full ${
        isLightThemeRoute ? 'bg-gray-100 text-black' : 'bg-[#090909] text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-32 space-y-24">

        {/* Section 1: Workflow */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={workflow}
            alt="Workflow"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              🔧 Typical Workflow
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Projects usually begin with a clear <strong className="text-red-400">brief</strong>, followed by in-depth <strong className="text-red-400">research</strong> into the brand, audience, and goals. 
              Next comes the <strong className="text-red-400">design and development phase</strong>, where ideas are transformed into reality. 
              After that, time is allocated for <strong className="text-red-400">revisions and feedback</strong>, ensuring everything aligns with the client’s expectations. 
              Finally, the completed product is <strong className="text-red-400">delivered and deployed</strong> to the appropriate platform.
            </p>
          </div>
        </section>

        {/* Section 2: Communication */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img
            src={communication}
            alt="Communication Tools"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              💬 Communication & Collaboration
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Projects are managed through tools like <strong className="text-red-400">Slack</strong>, <strong className="text-red-400">Notion</strong>, <strong className="text-red-400">Trello</strong>, and <strong className="text-red-400">Loom</strong> for updates and screen recordings. 
              <strong className="text-red-400">Email</strong> is used for formal communication and deliverables. 
              Transparency and ongoing collaboration ensure the project remains aligned with the client’s vision throughout the development process.
            </p>
          </div>
        </section>

        {/* Section 3: Client Requirements */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={requirements}
            alt="Client Requirements"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              📦 Project Requirements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Before starting a project, essential materials are requested from the client: 
              <strong className="text-red-400"> brand assets</strong> (logos, colors, fonts), 
              a clear outline of <strong className="text-red-400">goals and functionality</strong>, 
              any <strong className="text-red-400">reference websites</strong> for visual inspiration, 
              and a preferred <strong className="text-red-400">timeline</strong>. 
              These help create a shared vision and avoid miscommunication during the development cycle.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Process;
