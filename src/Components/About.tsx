import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="grid items-center gap-5 bg-secondary text-primary lg:grid-cols-2">
      <div className="order-1 px-10 pt-10 text-center text-2xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quia
        amet sunt quibusdam minus corporis distinctio nulla dignissimos
        laudantium, fugiat eos hic quasi vitae ab necessitatibus labore
        explicabo consectetur eligendi soluta veritatis nobis veniam. Porro
        assumenda eveniet laborum ratione ut et, soluta vero, rem delectus, est
        velit. Possimus eveniet praesentium magnam! Nihil doloribus explicabo
        consequuntur, exercitationem nostrum quis odit labore laborum placeat.
        Quasi, sunt ullam. Laboriosam minus perferendis fugit illo blanditiis
        excepturi quia maiores quae sapiente quod voluptate mollitia odit sint
        aliquam debitis obcaecati ex error exercitationem repellat velit earum
        sed, dolorum numquam autem? Cum repellendus a iste officiis porro.
      </div>

      <div className="order-2 px-10" data-aos="fade-left">
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

      <div
        className="order-4 self-center px-10 lg:order-3"
        data-aos="fade-right"
      >
        <img src={require("../Images/about_2.png")} />
      </div>
    </div>
  );
}
