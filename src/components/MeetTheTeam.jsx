import habeebAdeleye from "../assets/img/team/habeeb-adeleye.svg";
import kayodeOkunade from "../assets/img/team/kayode-okunade.svg";
import lekanBolaji from "../assets/img/team/lekan-bolaji.svg";
import olaoluwaOlatunji from "../assets/img/team/olaoluwa-olatunji.svg";

const MeetTheTeam = () => {
  const team = [
    {
      name: "Lekan Bolaji",
      img: lekanBolaji,
      link: "lekan-bolaji",
    },
    {
      name: "Habeeb Adeleye",
      img: habeebAdeleye,
      link: "habeeb-adeleye",
    },
    {
      name: "Kayode Okunade",
      img: kayodeOkunade,
      link: "kayode-okunade",
    },
    {
      name: "Olaoluwa Olatunji",
      img: olaoluwaOlatunji,
      link: "olaoluwa-olatunji",
    },
  ];
  return (
    <div className='w-full flex justify-center h-auto py-20 bg-white'>
      <div className='lg:w-[90%] border border-t-1 border-r-0 border-l-0 border-b-0 border-navy-blue pt-10'>
        <p className='uppercase font-medium text-[16px] leading-[21px] tracking-[.01em] text-[#002F86]'>
          Meet the team
        </p>
        <div className='flex justify-end space-x-5 cursor-pointer'>
          {team.map((member, index) => (
            <div className='flex flex-col space-y-5' key={index}>
              <a href={`/team/${member.link}`} alt={member.name}>
                <img src={member.img} key={index} alt={member.name} />
                <p className='text-[#011D21] text-[1rem] font-medium'>
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
