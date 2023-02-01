import "../Styles/Works.css";
import ImageSlides from "./ImageSlides";
import "aos/dist/aos.css";
import Aos from "aos";
import {
  fetchApi1,
  stock1,
  stock2,
  stock3,
  stock4,
  todo1,
  todo2,
} from "./ImagesImport";
import { useEffect } from "react";

export function Works() {
  const updatedSlides: any[][] = [
    [stock1, stock2, stock3, stock4],
    [todo1, todo2],
    [fetchApi1],
  ];

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="works bg-primary pt-[20vh] text-secondary md:pt-[30vh] lg:pt-[40vh]">
      <h1 className="bg-gradient-to-b from-blue-300 via-lime-200 to-blue-400 bg-clip-text p-12 pb-0 text-6xl font-extrabold text-transparent">
        Projects
      </h1>

      <div className="grid-template">
        <div className="left-paragraph stock-app">
          <div className="slider grid-slider" data-aos="fade-up">
            <ImageSlides Slides={updatedSlides[0]} />
          </div>
          <div className="proj-description grid-descr p-12">
            <h2 className="pb-4 text-4xl font-bold">Stock App</h2>
            <p className="text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eum aperiam perferendis vero quae dolore, nihil totam fuga
              exercitationem aliquam, sunt, provident minus numquam illo
              consequuntur perspiciatis dolor atque sequi corrupti illum! Porro
              deleniti soluta unde officia numquam error alias, rerum mollitia,
              cumque placeat earum veniam eligendi sit dolor! Sit doloribus a
              consequatur nobis nisi facilis eum aut architecto hic quam? Quas
              atque quisquam, dolor ut laboriosam et, ipsa nihil cupiditate
              tempora voluptatibus hic voluptatum earum eius dolorum sunt. Ipsa
              tenetur aperiam placeat quos in, commodi maxime sunt ipsam
              incidunt vero repudiandae asperiores optio temporibus, veritatis
              magni, illo veniam amet!
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="right-paragraph api-app">
          <div className="slider grid-slider" data-aos="fade-up">
            <ImageSlides Slides={updatedSlides[1]} />
          </div>
          <div className="proj-description grid-descr p-12">
            <h2 className="pb-4 text-4xl font-bold">ToDo App</h2>
            <p className="text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eum aperiam perferendis vero quae dolore, nihil totam fuga
              exercitationem aliquam, sunt, provident minus numquam illo
              consequuntur perspiciatis dolor atque sequi corrupti illum! Porro
              deleniti soluta unde officia numquam error alias, rerum mollitia,
              cumque placeat earum veniam eligendi sit dolor! Sit doloribus a
              consequatur nobis nisi facilis eum aut architecto hic quam? Quas
              atque quisquam, dolor ut laboriosam et, ipsa nihil cupiditate
              tempora voluptatibus hic voluptatum earum eius dolorum sunt. Ipsa
              tenetur aperiam placeat quos in, commodi maxime sunt ipsam
              incidunt vero repudiandae asperiores optio temporibus, veritatis
              magni, illo veniam amet!
            </p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="left-paragraph todo-app">
          <div className="slider grid-slider" data-aos="fade-up">
            <ImageSlides Slides={updatedSlides[2]} />
          </div>
          <div className="proj-description grid-descr p-12">
            <h2 className="pb-4 text-4xl font-bold">Api Reading Api</h2>
            <p className="text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eum aperiam perferendis vero quae dolore, nihil totam fuga
              exercitationem aliquam, sunt, provident minus numquam illo
              consequuntur perspiciatis dolor atque sequi corrupti illum! Porro
              deleniti soluta unde officia numquam error alias, rerum mollitia,
              cumque placeat earum veniam eligendi sit dolor! Sit doloribus a
              consequatur nobis nisi facilis eum aut architecto hic quam? Quas
              atque quisquam, dolor ut laboriosam et, ipsa nihil cupiditate
              tempora voluptatibus hic voluptatum earum eius dolorum sunt. Ipsa
              tenetur aperiam placeat quos in, commodi maxime sunt ipsam
              incidunt vero repudiandae asperiores optio temporibus, veritatis
              magni, illo veniam amet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
