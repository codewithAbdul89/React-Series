import { twitterIcon, linkdinIcon, telegramIcon } from "../assets/Icons"
import { Link } from "react-router-dom"
function About() {
  return (
    <div className="pt-3 sm:py-10 border-y  border-brand-gold h-[90vh] sm:h-auto bg-gradient-to-r from-brand-olive via-brand-beige to-brand-olive relative w-full">

      <div className=" h-full  grid grid-cols-2 sm:grid-cols-1 w-fulsl relative sm:justify-items-center sm:gap-10 md:w-[85%] animate-slide-in transition-transform duration-1000">
        {/* img */}
        <section className=" w-full h-full sm:w-[300px] sm:h-[300px]  flex items-center justify-center">
          <img
            className="h-full md:left-[1%] md:absolute sm:object-cover sm:w-[300px] sm:h-[300px] object-contain  sm:border-2 sm:rounded-full sm:hover:border-brand-gold sm:hover:border-[3px] transition-all ease-in-out duration-300"
            src="https://i.ibb.co/qMCQbFRV/image.png"
            alt="my pic" />
        </section>

        {/* text */}
        <section className="flex flex-col  borderx items-start justify-center  sm:px-8  gap-y-4 sm:gap-y-6 mx-auto z-10">
          <h1 className="text-5xl font-bold"><span className="text-black/70">Hi, I'm <span className="text-brand-brown">Abdul Rehman</span></span></h1>
          <div className="flex justify-center flex-col text-black/50  w-full gap-y-2 font-semibold">
            <ul className="text-2xl sm:text-lg list-disc pl-6 ">
              <li>Frontend Developer</li>
              <li>React Enthusiast</li>
            </ul>

          </div>
          <div className="flex gap-x-4  w-full font-semibold text-lg">
            <Link
              className="bg-brand-brown hover:bg-brand-gold duration-300 transition text-white rounded-lg px-4 py-2"
              to="/project">View my Work</Link>
            <Link className=" hover:text-brand-gold hover:font-semibold hover:border-brand-gold border border-white duration-300 transition text-white rounded-lg px-4 py-2" to="/contact">Contact Me</Link>
          </div>
          <div className="max-w-lg text-gray-500">
            I’m Abdul Rehman, a Frontend Developer passionate about building clean, responsive, and user-friendly web interfaces. I enjoy working with React and modern web technologies to create smooth and engaging user experiences.
          </div>
          <div className=" flex gap-x-4 sm:justify-center items-center w-full md:pl-2">
            <Link className="hover:opacity-40 hover:scale-[1.1] transition-all ease-in-out duration-300" to="/about">{twitterIcon}</Link>
            <Link className="hover:opacity-40 cursor-pointer hover:scale-[1.1] transition-all ease-in-out " to="/about">{linkdinIcon}</Link>
            <Link className="hover:opacity-40 hover:scale-[1.1] transition-all ease-in-out duration-300" to="/about">{telegramIcon}</Link>
          </div>

        </section>

      </div>

    </div>
  )
}

export default About