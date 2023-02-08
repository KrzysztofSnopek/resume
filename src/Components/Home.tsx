export function Home() {
  return (
    <div className="grid gap-2 bg-gradient-to-b from-indigo-700 via-indigo-600 to-secondary xsm:grid-cols-1 xsm:p-4 md:grid-cols-2 md:p-16 lg:grid-cols-4">
      <div className="col-span-2 md:order-1">
        <div className="bg-gradient-to-b from-blue-300 via-lime-200 to-blue-400 bg-clip-text pb-6 text-6xl font-extrabold text-transparent">
          Krzysztof Snopek
        </div>

        <div className="grid grid-cols-2 gap-4 sm:order-2 md:order-3">
          <div className="order-1 col-span-2 bg-gradient-to-b from-blue-300 via-lime-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent xsm:col-span-2">
            I like to create solid apps and learn new technologies.
          </div>

          <div className="text-l order-2 bg-gradient-to-b bg-clip-text font-extrabold text-transparent xsm:col-span-2 xsm:from-gray-900 xsm:to-gray-900 md:col-span-1 md:from-gray-900 md:via-gray-800 md:to-indigo-900">
            Since I started my journey into web development, I have learned
            quite a few different technologies as I have been getting better.
            Starting with basics like HTML and CSS, I got to know JavaScript,
            ReactJS framework, and typescript later on. My improvement over time
            can be seen on GitHub as I started using it after a few minor
            projects. I've tried a few ways to style the app other than CSS -
            mainly styled-components and for this app Tailwind. I've used
            firebase to apply authorization to my app and deploy it.
            <div className="flex flex-wrap py-4">
              <img className="h-16 p-1" src={require("../Images/HTML.png")} />
              <img className="h-16 p-1" src={require("../Images/CSS.png")} />
              <img className="h-16 p-2" src={require("../Images/JS.png")} />
              <img className="h-16 p-2" src={require("../Images/TS.png")} />
              <img
                className="h-16 p-2 drop-shadow-md"
                src={require("../Images/reactjs.png")}
              />
              <img className="h-16 p-2" src={require("../Images/github.png")} />
              <img
                className="h-16 p-2"
                src={require("../Images/bootstrap.png")}
              />
              <img
                className="h-16 p-2 drop-shadow-whiteShadow"
                src={require("../Images/tailwind.png")}
              />
              <img
                className="h-16 p-2 drop-shadow-whiteShadow"
                src={require("../Images/firebase.png")}
              />
            </div>
          </div>
          <div className="text-l order-3 bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900 bg-clip-text font-extrabold text-transparent xsm:col-span-2 md:col-span-1">
            I decided that my next project would be created by using React
            Query, which can help me simplify and manage my data fetching code,
            and by implementing React state manager in the form of React state
            manager - MobX. I have yet to decide on the form of the app, but it
            will probably be a sort of chat application.
            <div className="flex flex-wrap py-4">
              <img className="h-16 p-2" src={require("../Images/mobx.png")} />
              <img
                className="h-16 p-2"
                src={require("../Images/reactQuery.svg").default}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 sm:order-3 md:order-2 md:col-span-2 md:row-span-2">
        <img src={require("../Images/Home_Slide.png")} />
      </div>
    </div>
  );
}
