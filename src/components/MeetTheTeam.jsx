import { team } from "../global/team";

const MeetTheTeam = () => {
  return (
    <div className='w-full flex justify-center h-auto py-20 bg-white'>
      <div className='w-full lg:w-[90%] border border-t-1 border-r-0 border-l-0 border-b-0 border-navy-blue pt-10 space-y-5 lg:space-y-0'>
        <p className='uppercase font-medium text-[16px] leading-[21px] tracking-[.01em] text-[#002F86] text-center lg:text-start'>
          Meet the team
        </p>
        <div className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-end space-x-5 cursor-pointer'>
          {team &&
            team.map((member, index) => (
              <div className='flex flex-col lg:flex-row items-center' key={index}>
                <a href={`/team/${member.link}`} alt={member.name}>
                  <img src={member.img} key={index} alt={member.name} />
                  <p className='text-[#011D21] text-[1rem] font-medium text-center lg:text-start'>
                    {member.name}
                  </p>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
