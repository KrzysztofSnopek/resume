// import "../Styles/Home.css";

export function Home() {
  return (
    <div className="grid gap-2 bg-gradient-to-b from-indigo-700 via-indigo-600 to-secondary xsm:grid-cols-1 xsm:p-4 md:grid-cols-4 md:p-16">
      <div className="col-span-2 md:order-1">
        <div className="bg-gradient-to-b from-blue-300 via-lime-200 to-blue-400 bg-clip-text pb-6 text-6xl font-extrabold text-transparent">
          Krzysztof Snopek
        </div>

        <div className="grid grid-cols-2 gap-4 sm:order-2 md:order-3">
          <div className="order-1 col-span-2 bg-gradient-to-b from-blue-300 via-lime-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent xsm:col-span-2">
            I like to create solid apps and learn new technologies.
          </div>

          <div className="text-l order-2 bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900 bg-clip-text font-extrabold text-transparent xsm:col-span-2 md:col-span-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem
            numquam nihil asperiores maxime recusandae aut placeat.
            Exercitationem officia minima nesciunt blanditiis omnis cumque
            asperiores amet sapiente voluptatum quo autem quia enim obcaecati
            beatae sint nihil, voluptatibus, accusantium neque odio repudiandae
            esse quaerat tempora. Distinctio esse expedita nihil alias
            voluptatum.
          </div>
          <div className="text-l order-3 bg-gradient-to-b from-gray-900 via-gray-800 to-indigo-900 bg-clip-text font-extrabold text-transparent xsm:col-span-2 md:col-span-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vitae praesentium saepe in facilis pariatur, culpa unde veritatis,
            perspiciatis distinctio, at nemo delectus. Libero quibusdam
            accusantium dolorum nisi maxime sequi atque mollitia voluptas ea
            maiores. Optio possimus accusamus sequi impedit, earum sunt eos
            mollitia sapiente, facilis, quas corporis expedita reiciendis cumque
            consequatur aspernatur dolores libero?
          </div>
        </div>
      </div>

      <div className="p-10 sm:order-3 md:order-2 md:col-span-2 md:row-span-2">
        <img src={require("../Images/Home_Slide.png")} />
      </div>
    </div>
  );
}
