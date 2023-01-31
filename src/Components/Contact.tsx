import "../Styles/Contact.css";

export function Contact() {
  return (
    <div className="grid gap-6 bg-outro bg-contact-pattern bg-no-repeat p-4 pt-[20vh] font-bold text-secondary sm:text-xl md:grid-cols-1 md:pt-[30vh] md:text-3xl lg:grid-cols-2 lg:pt-[40vh]">
      <div className="ml-2 border-l-4 border-l-lime-300 p-8 lg:order-1">
        GET IN TOUCH
      </div>

      <div className="ml-2 border-l-4 border-l-lime-300 p-8 lg:order-3">
        Do you think I could fit in the team? Let's make it reality. Message me
        now!
      </div>

      <div className="row-span-2 ml-2 border-l-4 border-l-lime-300 p-5 lg:order-2">
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
            className="git-link text-xl text-secondary sm:text-xl md:text-3xl"
          >
            https://github.com/KrzysztofSnopek
          </a>
        </div>
      </div>
    </div>
  );
}
