import React from 'react';

const skills = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and interactive interfaces.',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Framer Motion'],
  },
  {
    title: 'Backend Development',
    description: 'Creating scalable APIs and managing business logic.',
    items: ['Node.js', 'Express.js', 'JWT Auth', 'Bcrypt', 'RESTful APIs'],
  },
  {
    title: 'Databases & ORM',
    description: 'Efficient data modeling and handling with relational and NoSQL databases.',
    items: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Prisma', 'pgAdmin'],
  },
  {
    title: 'Dev Tools & Deployment',
    description: 'Version control, CI/CD, and cloud-based deployment.',
    items: ['Git & GitHub', 'Docker (basic)', 'Netlify / Vercel / Render', 'Railway', 'VS Code'],
  },
];

function AboutSkill() {
  return (
    <div className="w-full bg-gray-200 text-[#090909] py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Introductory Section (Left Column) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Professional Overview</h2>
          <p className="text-[#090909] text-lg sm:text-base leading-relaxed max-w-[400px]">
  <strong className="text-red-400">Full Stack Developer</strong> specialized in building fast, scalable, and secure web applications using the
   <strong className="text-red-400">MERN</strong> (MongoDB, Express, React, Node.js) and <strong className="text-red-400">PERN</strong> 
   (PostgreSQL, Express, React, Node.js) stacks.<br></br><br></br> <br></br><br></br> Highly experienced in <strong className="text-red-400">frontend</strong> development with tools like
    <strong className="text-red-400">React</strong>, <strong className="text-red-400">Tailwind CSS</strong>, and
     <strong className="text-red-400">Figma</strong> to deliver responsive, accessible, and engaging user interfaces.
      Proficient in designing <strong className="text-red-400">RESTful APIs</strong>, managing <strong className="text-red-400">relational</strong>
       and <strong className="text-red-400">NoSQL databases</strong>, and integrating third-party services and authentication systems.
<br></br><br></br><br></br><br></br>
Strong grasp of modern <strong className="text-red-400">JavaScript</strong> patterns,
 <strong className="text-red-400">React hooks</strong>, component architecture, and state management libraries like
  <strong className="text-red-400">Redux</strong> and <strong className="text-red-400">Zustand</strong>. 
  Comfortable working with backend technologies such as <strong className="text-red-400">Node.js</strong>, 
  <strong className="text-red-400">Express.js</strong>, and <strong className="text-red-400">JWT</strong> 
  for building secure and maintainable server-side applications. Familiar with <strong className="text-red-400">GraphQL</strong> 
  and <strong className="text-red-400">WebSockets</strong> for advanced data-fetching and real-time features.
<br></br><br></br><br></br><br></br>
Experienced in <strong className="text-red-400">CI/CD</strong> pipelines, version control with <strong className="text-red-400">Git</strong>,
 and cloud deployment using platforms like <strong className="text-red-400">Vercel</strong>, <strong className="text-red-400">Netlify</strong>, and 
 <strong className="text-red-400">Render</strong>. Well-versed in <strong className="text-red-400">agile development</strong> 
 environments, collaborating with designers and stakeholders to transform mockups into functional products.<br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
  Passionate about <strong className="text-red-400">clean code</strong>, performance optimization, and delivering smooth 
  <strong className="text-red-400">user experiences</strong> across devices.
</p>

        </div>

        {/* Skills Grid (Right Column) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left">Skills & Expertise</h2>
          <div className="grid grid-cols-1 gap-8">
            {skills.map((cluster) => (
              <div
                key={cluster.title}
                className="bg-[#111] p-6 rounded-lg shadow-md border border-[#222]"
              >
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  {cluster.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{cluster.description}</p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-100">
                  {cluster.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSkill;
