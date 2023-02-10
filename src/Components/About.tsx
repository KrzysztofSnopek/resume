import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "linear" });
  }, []);

  return (
    <div>
      <div className="grid items-center gap-5 bg-secondary pt-12 text-primary lg:grid-cols-2">
        <div className="order-1 px-10 pt-10 text-center text-2xl font-bold">
          For the last half a year, I have been learning React framework and how
          to become a front-end developer. I am focusing on learning ReactJS and
          using typescript to create the front-end part of the apps. I think I
          have the basic knowledge allowing me to start the work, which I am
          looking forward to. Doing more projects on my own is for sure
          satisfactory, but taking part in a live project with other experienced
          programmers would exponentially propel my learning speed in the field
          of web development! If you are looking for a fast learner with lots of
          energy to improve himself, don't hesitate to contact me!
        </div>

        <div className="order-2 px-10" data-aos="fade-up">
          <img src={require("../Images/about_1.png")} />
        </div>

        <div className="order-3 px-10 text-center text-2xl font-bold lg:order-4">
          <p>
            I have worked as a road designer for the last 3 years. My duties
            included creating technical documentation for roads, plazas and
            small buildings; obtaining necessary permits from adequate
            departments.
          </p>
          <p>
            My biggest achievement was completing a project of a tram line in
            Sosnowiec in time. I was a team leader responsible for organising
            work for other designers, organising meetings and keeping up with
            the schedule. The road investment was completed last year and its'
            total cost was over 90 million zlotys.
          </p>
        </div>

        <div
          className="order-4 self-center px-10 lg:order-3"
          data-aos="fade-up"
        >
          <img src={require("../Images/about_2.png")} />
        </div>
      </div>
      <div className="bg-primary bg-about-pattern bg-no-repeat pb-[20vh] md:pb-[30vh] lg:pb-[40vh]"></div>
    </div>
  );
}
