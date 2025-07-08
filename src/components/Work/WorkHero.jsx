import React from 'react';

function WorkHero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-[70vh] px-8 sm:px-16 lg:px-8">
      <div className="text-left w-full max-w-[1400px]">
        <p className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] font-extrabold leading-tight">
          PROJECTS<br />LABS
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start w-full mt-6 gap-4">
          <p className="text-base sm:text-lg font-bold">
            PROJECTS
          </p>
          <p className="text-sm sm:text-base font-normal max-w-[600px] md:w-[70%] leading-relaxed">
            A selected set of projects I've built as an individual and with a team. This is my mix of personal, collaborative, and client-owned projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkHero;
