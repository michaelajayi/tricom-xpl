import React from "react";
import quote from "../assets/img/quote.svg";
import { team } from "../global/team";

const OurTeamGrid = () => {
  return (
    <div className='team-grid w-full'>
      {team.map((member, index) => (
        <div
          key={index}
          className='flex flex-col lg:flex-row justify-between space-x-5 space-y-5 lg:space-y-10'
        >
          <div>
            <img src={member.teamImg} />
          </div>
          <div className='w-full flex flex-col space-y-5 items-start px-0 md:px-0'>
            {/* quote */}
            <img src={quote} alt='quote img' />
            <p className='text-navy-blue text-[20px] lg:text-[24px] font-bold leading-[150%]'>
              {member.name}
            </p>
            <p className='text-[13.062px] lg:text-[13.062px]  text-[#667085] member-intro pr-10 md:pr-0'>
              {member.intro}
            </p>
            <ul className='pl-10'>
              {member.education.map((edu, index) => (
                <li className='list-disc list' key={index}>
                  <p className='text-deep-blue text-[10.4496px] lg:text-[10.4496px] member-education pr-10 md:pr-0'>
                    {edu.degree}
                  </p>
                </li>
              ))}
            </ul>
            <div className='flex flex-col space-y-1 py-5'>
              <p className='text-navy-blue text-[16px] lg:text-[20px] leading-[30px] font-semibold brands-managed-title'>
                Brands/Projects Managed
              </p>
              <ul className='pl-10'>
                {member.projectsManaged.map((project, index) => (
                  <li className='list-disc list' key={index}>
                    <p className='text-deep-blue text-[10.4496px] lg:text-[10.4496px] member-brands '>
                      {project.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeamGrid;
