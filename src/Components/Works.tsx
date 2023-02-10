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
    Aos.init({ duration: 2000, easing: "linear" });
  }, []);

  return (
    <div className="works bg-primary text-secondary">
      <h1 className="bg-gradient-to-b from-blue-300 via-lime-200 to-blue-400 bg-clip-text p-12 pb-0 text-6xl font-extrabold text-transparent">
        Projects
      </h1>

      <div className="grid-template">
        <div className="left-paragraph stock-app">
          <div className="slider grid-slider" data-aos="fade-up">
            <ImageSlides Slides={updatedSlides[0]} />
          </div>
          <div className="proj-description grid-descr flex flex-col p-12">
            <h2 className="pb-4 text-4xl font-bold">Stock App</h2>
            <p className="text-2xl font-bold">
              A React based app that allows the user to browse through the stock
              values that are getting fetched from an api in real time. Styled
              with bootstrap, the app allows the user to buy and sell shares at
              their current prices with immediate update to the user's wallet.
              User can log in to his account - the option was introduced with
              the help of firebase.
            </p>
            <a
              href="https://stock-market-applic.web.app/"
              className="mt-8 self-center border-4 border-secondary bg-indigo-700 p-4 text-3xl font-bold hover:bg-secondary hover:text-primary"
            >
              Click me to check app online!
            </a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="right-paragraph api-app">
          <div className="slider grid-slider" data-aos="fade-up">
            <ImageSlides Slides={updatedSlides[1]} />
          </div>
          <div className="proj-description grid-descr flex flex-col p-12">
            <h2 className="pb-4 text-4xl font-bold">ToDo App</h2>
            <p className="text-2xl font-bold">
              A to-do list app created by using React. User is able to create
              new list items, which after exceeding given amount will create new
              pages created with react-paginate, that you can freely navigate
              to. You have the ability to remove the items, which will be moved
              to the other section. All information is saved in local storage.
              The app was styled using styled components.
            </p>
            <a
              href="https://todo-list-applic.web.app/"
              className="mt-8 self-center border-4 border-secondary bg-indigo-700 p-4 text-3xl font-bold hover:bg-secondary hover:text-primary"
            >
              Click me to check app online!
            </a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="left-paragraph todo-app">
          <div className="slider grid-slider" data-aos="fade-up">
            <ImageSlides Slides={updatedSlides[2]} />
          </div>
          <div className="proj-description grid-descr flex flex-col p-12">
            <h2 className="pb-4 text-4xl font-bold">Api Reading App</h2>
            <p className="text-2xl font-bold">
              A simple app which focuses on fetching data, sorting and
              displaying it in an intended way.
            </p>
            <a
              href="https://api-fetching-app.web.app/"
              className="mt-8 self-center border-4 border-secondary bg-indigo-700 p-4 text-3xl font-bold hover:bg-secondary hover:text-primary"
            >
              Click me to check app online!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
