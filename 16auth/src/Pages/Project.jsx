import { githubIcon } from "../assets/Icons"
import { useScrollAnimation } from "../Components/useScrollAnimation"

function Project() {
  useScrollAnimation();

  const projectDetails = [
    {
      title: "Currency Converter",
      description: "A modern and user-friendly currency converter developed using React and Tailwind CSS, enabling real-time conversion between multiple currencies with a clean, responsive UI. ",
      imgUrl: "https://i.ibb.co/fVH9MH2K/image.png",
      liveUrl: "https://currency-converter-ofabdul.netlify.app/",
      githubUrl: "https://github.com/codewithAbdul89/React-Series/tree/main/06CurrencyConvertor",
    },
    {
      title: "QR Code Genrator",
      description: "A simple and intuitive QR code generator built with HTML, Tailwind CSS and JavaScript. It allows users to generate QR codes for their text, links, and other data.",
      imgUrl: "https://i.ibb.co/bM3BbZV2/image.png",
      liveUrl: "https://earnest-buttercream-1e7041.netlify.app/",
      githubUrl: "https://github.com/codewithAbdul89/Different-Projects/tree/main/QR%20Code%20Generator",
    },
    {
      title: " First Responsive Website",
      description: "A simple and intuitive responsive website built with HTML, Tailwind CSS and JavaScript. It allows users to navigate through the website and interact with the elements.",
      imgUrl: "https://i.ibb.co/N6t6BV50/image.png",
      liveUrl: "https://1-website-ofabdul.netlify.app/",
      githubUrl: "https://github.com/codewithAbdul89/First-Website",
    },
    {
      title: "  Second Responsive Website",
      description: "A simple and intuitive responsive website built with HTML, Tailwind CSS and JavaScript. It allows users to navigate through the website and interact with the elements.",
      imgUrl: "https://i.ibb.co/d0ZN7VvG/image.png",
      liveUrl: "https://2-website-ofabdul.netlify.app/",
      githubUrl: "https://github.com/codewithAbdul89/Finance-Website",
    },
    {
      title: "Random PassWord Genrator",
      description: "A simple and intuitive password generator built with React and Tailwind CSS. It allows users to generate random passwords based on their preferences like length,numbers,symbols etc.",
      imgUrl: "https://i.ibb.co/m5C6hn3Z/image.png",
      liveUrl: "https://app.netlify.com/projects/password-genrator-ofabdul/overview",
      githubUrl: "https://github.com/codewithAbdul89/React-Series/tree/main/05PasswordGenerator",
    },
    {
      title: "To do List",
      description: "A simple and intuitive to-do list application built with React and Tailwind CSS. It allows users to add, edit, delete, and mark tasks as complete or incomplete. It also has a feature to save tasks in local storage.",
      imgUrl: "https://i.ibb.co/7tV7DnLZ/image.png",
      liveUrl: "https://app.netlify.com/projects/todo-list-ofabdul/overview",
      githubUrl: "https://github.com/codewithAbdul89/React-Series/tree/main/10TodoApp",
    },
    {
      title: "Age Calculator",
      description: "A modern and intuitive age calculator developed using HTML, Tailwind CSS, and JavaScript, allowing users to instantly calculate their exact age from their date of birth through a clean and responsive UI. ",
      imgUrl: "https://i.ibb.co/fdpH7YBW/image.png",
      liveUrl: "https://app.netlify.com/projects/age-calculator-ofabdul/overview",
      githubUrl: "https://github.com/codewithAbdul89/Different-Projects/tree/main/Age%20Calculator",
    },

    {
      title: "GYM Website",
      description: "A simple and intuitive GYM website built with HTML, Tailwind CSS and JavaScript. It allows users to navigate through the website and interact with the elements.",
      imgUrl: "https://i.ibb.co/CssypvZX/image.png",
      liveUrl: "https://serene-crisp-991ae8.netlify.app/",
      githubUrl: "https://github.com/codewithAbdul89/Different-Projects/tree/main/GYM%20Website",
    },
    {
      title: "Simple Quiz",
      description: "A simple and intuitive quiz application built with HTML, Tailwind CSS and JavaScript. It allows users to answer questions and get their score.",
      imgUrl: "https://i.ibb.co/TxS3PpXY/image.png",
      liveUrl: "https://deluxe-croquembouche-608792.netlify.app/",
      githubUrl: "https://github.com/codewithAbdul89/Different-Projects/tree/main/My%20Quiz",
    },
    {
      title: "AI ChatBot",
      description: "A simple and intuitive chatbot application built gradio using grooq API. It allows users to chat with the chatbot and get the responses of questions.",
      imgUrl: "https://i.ibb.co/Tz2KTvD/image.png",
      liveUrl: "https://ghostofabdul-mychatboot.hf.space",
    },
    {
      title: "Translator",
      description: "A simple and intuitive translator application built gradio using grooq API. It allows users to translate text from one English to Urdu and vice versa.",
      imgUrl: "https://i.ibb.co/PGbFcH7Y/image.png",
      liveUrl: "https://ghostofabdul-translator.hf.space",
    },
    {
      title: "Voice-to-Voice AI Application",
      description: "A simple and intuitive Voice-to-Voice AI Application built using gradio ,groq API and STT ,TTS models. It allows users to chat with the chatbot in voice and get the responses of questions in voice.",
      imgUrl: " https://i.ibb.co/Zp0nLjkP/image.png",
      liveUrl: "https://ghostofabdul-voice-to-voice-ai-application.hf.space",
    },
  ]

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-brand-beige/10 md:px-6 px-4 py-12">
      <div className="max-w-7xl mx-auto">

        <div className='animate-slide-in'>
          <h1 className="text-6xl  font-bold text-center text-brand-brown">Project
            <span className='text-brand-gold '> ShowCase</span>
          </h1>
          <p className='text-xl text-brand-taupe max-w-2xl mx-auto text-center mt-6'>Here are some of the web development projects I’ve worked on, showcasing my skills in building modern, responsive, and user-friendly applications.</p>
        </div>

        {/* Projects bord*/}
        <div className=' mt-16 grid md:grid-cols-3 grid-cols-1 gap-8 md:justify-items-center'>
          {
            projectDetails?.map((projects, index) => (
              <div key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
                className='animate-on-scroll bg-white/70 hover:shadow-md transition hover:-translate-y-2 h-auto w-80 rounded-xl sm:w-full p-1 '>
                <a target="blank" href={projects.liveUrl}><img className="w-full z-10 object-cover h-48 rounded-xl shadow border-b-2 border-brand-brown" src={projects.imgUrl} alt="ProjectImg" /></a>


                <div className="mt-2 p-4 flex flex-col gap-3">
                  <h1 className="text-3xl text-center font-bold text-brand-brown/90">{projects.title}</h1>
                  <p className="text-brand-taupe text-center">{projects.description}</p>
                  <div className='flex items-center gap-6 justify-center'>
                    <a target="blank" href={projects.liveUrl} className='bg-brand-brown/90 hover:bg-brand-gold hover:text-white duration-300 text-white/70 px-5 py-2 rounded-lg text-sm'>View Project</a>{
                      projects.githubUrl && <a target="blank" href={projects.githubUrl} className="bg-brand-gold fill-current rounded-full hover:opacity-60">{githubIcon}</a>
                    }

                  </div>
                </div>


              </div>
            ))
          }

        </div>





      </div>
    </div>
  )
}

export default Project