import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import client from '../../../../assets/images/client.png'
import project from "../../../../assets/images/project.png";
import time from "../../../../assets/images/time.png";
import team from "../../../../assets/images/team.png";
import Lottie from "lottie-react";
import countupanimated from "../../../../assets/animated/count.json";

const CountUps = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-5 mt-24">
      <div className="md:flex justify-between items-center gap-8">
        <div className="md:w-1/2">
          <p>REAL NUMBERS</p>
          <h1 className="text-4xl font-bold mt-3">
            Expect Great Things from Your SEO Agency
          </h1>
          <p className="mt-4 text-lg">
            We know how important customer experience is for a busines and
            therefore, we trive to make your company excel in this.
          </p>
          <div className="flex gap-14 mt-10">
            <div className="flex items-center gap-5">
              <div className="">
                <img className="h-28" src={client} alt="" />
              </div>
              <div className="">
                <ScrollTrigger
                  className="text-3xl font-bold"
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={300} duration={5} delay={0} />
                  )}
                  +
                </ScrollTrigger>
                <h1>Active Clients</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="">
                <img className="h-28" src={team} alt="" />
              </div>
              <div className="">
                <ScrollTrigger
                  className="text-3xl font-bold"
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={80} duration={3} delay={0} />
                  )}
                  +
                </ScrollTrigger>
                <h1>Team Advisors</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            <div className="flex items-center gap-5">
              <div className="">
                <img className="h-28" src={project} alt="" />
              </div>
              <div className="">
                <ScrollTrigger
                  className="text-3xl font-bold"
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={120} duration={3} delay={0} />
                  )}
                  +
                </ScrollTrigger>
                <h1>Projects Done</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="">
                <img className="h-28" src={time} alt="" />
              </div>
              <div className="">
                <ScrollTrigger
                  className="text-3xl font-bold"
                  onEnter={() => setCountOn(true)}
                  onExit={() => setCountOn(false)}
                >
                  {countOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  +
                </ScrollTrigger>
                <h1>Glorious Years</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <Lottie
            className="md:w-full"
            animationData={countupanimated}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CountUps;
