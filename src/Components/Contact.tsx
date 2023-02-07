import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export function Contact() {
  useEffect(() => {
    Aos.init({ duration: 3000, easing: "linear" });
  }, []);

  return (
    <div className="grid gap-6 bg-outro bg-contact-pattern bg-no-repeat p-4 pt-[20vh] pb-4 font-bold text-secondary md:grid-cols-1 md:pt-[30vh] lg:grid-cols-2 lg:pt-[40vh]">
      <div
        className="ml-2 border-l-4 border-l-lime-300 p-8 xsm:text-2xl md:text-4xl lg:order-1"
        data-aos="fade-down"
      >
        GET IN TOUCH
      </div>

      <div
        className="ml-2 max-w-sm border-l-4 border-l-lime-300 p-8 xsm:text-2xl md:text-4xl lg:order-3"
        data-aos="fade-down"
      >
        Do you think I could fit in the team? Let's make it reality. Message me
        now!
      </div>

      <div
        className="row-span-2 ml-2 max-w-sm border-l-4 border-l-lime-300 p-5 xsm:text-2xl lg:order-2"
        data-aos="fade-down"
      >
        <div className="max-w-sm p-3">
          <div>Email</div>
          <div className="max-w-sm pr-2 xsm:grid sm:flex">
            <div>krzysztof.snopek1</div>
            <div>@gmail.com</div>
          </div>
        </div>

        <div className="p-3">
          <div>Phone</div>
          <div>+48 668 698 369</div>
        </div>

        <div className="p-3">
          <div>Github</div>
          <a
            href="https://github.com/KrzysztofSnopek"
            className="git-link max-w-sm text-xl text-secondary sm:text-xl md:text-2xl"
          >
            https://github.com/KrzysztofSnopek
          </a>
        </div>
      </div>
    </div>
  );
}
