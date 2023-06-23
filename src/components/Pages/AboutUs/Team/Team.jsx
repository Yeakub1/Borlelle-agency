import React, { useEffect, useState } from "react";
import TeamData from "./TeamData";
// aso animation
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
     useEffect(() => {
       Aos.init();
     }, []);
  const [allData, setAllData] = useState([]);
  const [teamData, setTeamData] = useState([]);

  const handleSeeAll = () => {
    setTeamData(allData);
  };
  const handleSeeLess = () => {
    setTeamData(allData.slice(0, 3));
  };
  useEffect(() => {
    fetch("https://agency-server-ten.vercel.app/team")
      .then((res) => res.json())
      .then((data) => {
        setTeamData(data.slice(0, 3));
        setAllData(data);
      });
  }, []);

  return (
    <div className="max-w-7xl px-5 mx-auto mt-20">
      <div className="section-title text-center mb-10">
        <h5 className="text-4xl font-bold mb-2">Our Chefs</h5>
        <p className="md:w-1/2 mx-auto  ">
          At Chef's Magic, our expert chefs are the backbone of our restaurant.
          They are skilled and passionate about their craft, creating magic with
          each dish they prepare.
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="grid md:grid-cols-3 gap-6"
      >
        {teamData.map((team) => (
          <TeamData key={team._id} team={team} />
        ))}
      </div>
      <div className={`flex justify-center mt-10`}>
        {teamData.length === 3 ? (
          <button
            onClick={handleSeeAll}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            See all Team
          </button>
        ) : (
          <button
            onClick={handleSeeLess}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Team;
