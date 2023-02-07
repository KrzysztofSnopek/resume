import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1500, easing: "linear" });
  }, []);

  return (
    <div className="grid items-center gap-5 bg-secondary pt-12 text-primary lg:grid-cols-2">
      <div className="order-1 px-10 pt-10 text-center text-2xl font-bold">
        I have worked as a road designer for the last 3 years, but as this line
        of work is extremely dependent on the global market and the availability
        of building materials, I decided to move on and find a job in
        programming. For the last half a year I have been learning React
        framework and how to become a front-end developer. I am looking for an
        opportunity to improve my skills at work.
      </div>

      <div className="order-2 px-10" data-aos="fade-up">
        <img src={require("../Images/about_1.png")} />
      </div>

      <div className="order-3 px-10 text-center text-2xl font-bold lg:order-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        aperiam quidem velit quam ab amet architecto necessitatibus nostrum
        reprehenderit excepturi autem nam corporis in aspernatur, et
        exercitationem, maiores optio, provident asperiores? Est perspiciatis
        veritatis laudantium magnam, ea repellendus tempora illo numquam
        accusantium voluptas eos dicta fugiat sint, cum natus excepturi possimus
        alias inventore. Veniam nihil nam excepturi cumque fuga ex, a ipsa
        fugiat fugit eos neque dolor repellat soluta hic eius facere. Quos
        nostrum quia incidunt molestiae omnis possimus obcaecati quis commodi
        vero illum non, aspernatur consequuntur sed dignissimos? Sequi, mollitia
        unde. Veniam alias temporibus modi! Fugiat unde dolore aperiam?
      </div>

      <div className="order-4 self-center px-10 lg:order-3" data-aos="fade-up">
        <img src={require("../Images/about_2.png")} />
      </div>
    </div>
  );
}
