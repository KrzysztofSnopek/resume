// import "../Styles/Home.css";

export function Home() {
  return (
    <div className="grid gap-2 bg-gradient-to-b from-indigo-600 via-indigo-500 to-secondary xsm:grid-cols-1 xsm:p-4 md:grid-cols-4 md:p-16">
      <div className="col-span-2 md:order-1">
        <div className="bg-gradient-to-b from-blue-300 via-lime-200 to-blue-400 bg-clip-text pb-6 text-6xl font-extrabold text-transparent">
          Krzysztof Snopek
        </div>

        <div className="grid grid-cols-2 gap-2 sm:order-2 md:order-3">
          <div className="order-1 col-span-2 bg-gradient-to-b from-blue-300 via-lime-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent xsm:col-span-2">
            I like to create solid apps and learn new technologies.
          </div>

          <div className="order-2 bg-gradient-to-b from-blue-500 via-blue-700 to-primary bg-clip-text text-xl font-extrabold text-transparent xsm:col-span-2 md:col-span-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            consectetur eos quas architecto nulla ad necessitatibus illum
            tempore tenetur dolorem.
          </div>
          <div className="order-3 bg-gradient-to-b from-blue-500 via-blue-700 to-primary bg-clip-text text-xl font-extrabold text-transparent xsm:col-span-2 md:col-span-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium fugiat cumque expedita natus ipsa fugit vel sapiente.
            Impedit, qui ea.
          </div>
        </div>
      </div>

      <div className="p-10 sm:order-3 md:order-2 md:col-span-2 md:row-span-2">
        <img src={require("../Images/Home_Slide.png")} />
      </div>
    </div>
  );
}
