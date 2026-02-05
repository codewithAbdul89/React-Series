import { githubIcon, instagramIcon, gmailIcon } from "../assets/Icons"
export default function Footer() {
  return (
    <footer className="bg-brand-taupe  text-white/70 py-3 text-center sm:py-3 w-full">
      <h3 className="text-lg font-semibold">Abdul Rehman</h3>
      <p className="text-sm sm:text-lg mt-1">Frontend Developer</p>

      <div className="flex  justify-center gap-6 mt-3 items-center">
        <a
          className="flex items-center justify-center hover:opacity-40 transition-all ease-in-out duration-300 w-10 h-10 hover:scale-[1.2]"
          href="https://github.com/codewithAbdul89"> {githubIcon}</a>

        <a
          className="flex items-center justify-center hover:opacity-40 transition-all ease-in-out duration-300 w-10 h-10 hover:scale-[1.2]"
          href="mailto:muabdulrehman58@email.com">
          {gmailIcon}
        </a>

        <a
          className="flex items-center justify-center hover:opacity-40 transition-all ease-in-out duration-300 w-10 h-10 hover:scale-[1.2]"
          href="https://instagram.com/m.abdulrehman89">
          {instagramIcon}
        </a>
      </div>

      <p className="text-xs mt-3">
        © {new Date().getFullYear()} Abdul Rehman. All rights reserved.
      </p>
    </footer>
  )
}
