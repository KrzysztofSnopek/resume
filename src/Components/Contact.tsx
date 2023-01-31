import "../Styles/Contact.css";

export function Contact() {
  return (
    <div className="font-bold md:text-3xl sm:text-xl text-secondary bg-outro bg-contact-pattern bg-no-repeat p-4 pt-[20vh] md:pt-[30vh] lg:pt-[40vh] grid md:grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-8 lg:order-1 border-l-4 border-l-lime-300 ml-2">
        GET IN TOUCH
      </div>

      <div className="p-8 lg:order-3 border-l-4 border-l-lime-300 ml-2">
        Do you think I could fit in the team? Let's make it reality. Message me
        now!
      </div>

      <div className="p-5 lg:order-2 row-span-2 border-l-4 border-l-lime-300 ml-2">
        <div className="p-3">
          <div>Email</div>
          <div className="pr-2">krzysztof.snopek1@gmail.com</div>
        </div>

        <div className="p-3">
          <div>Phone</div>
          <div>+48 668 698 369</div>
        </div>

        <div className="p-3">
          <div>Github</div>
          <a
            href="https://github.com/KrzysztofSnopek"
            className="git-link text-xl sm:text-xl md:text-3xl text-secondary"
          >
            https://github.com/KrzysztofSnopek
          </a>
        </div>
      </div>
    </div>
  );
}
