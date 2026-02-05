import React from 'react'

function Skill() {
  const skillCategories = [
    {
      title: "HTML",
      description: "Creating structure and content for web pages",
      skills: [
        "HTML5",
        "Semantic HTML",
        "Forms",
        "Accessibility",
        "SEO Basics",
        "Web Standards"
      ],
      imgUrl: "https://i.ibb.co/QjkSBKnp/image.png"

    },
    {
      title: "Tailwind CSS",
      description: "Styling with utility-first CSS",
      skills: [
        "Tailwind",
        "Flexbox",
        "Grid",
        "Responsive",
        "Dark Mode",
        "Animations",
      ],
      imgUrl: "https://i.ibb.co/0VBbRCbb/image.png"

    },
    {
      title: "Java Script",
      description: "Creating dynamic and interactive features",
      skills: [
        "Variables & Scope",
        "ES6",
        "Async/Await",
        "DOM",
        "Events",
        "API Fetching"
      ],
      imgUrl: "https://i.ibb.co/j98ggVRt/image.png"

    },
    {
      title: "React",
      description: "Building modern,interactive UIs",
      skills: [
        "Components",
        "React",
        "Hooks",
        "Context API",
        "Redux",
        "Router",

      ],
      imgUrl: "https://i.ibb.co/Rrkdb7v/image.png"

    },


    {
      title: "Responsive Design",
      description: "Ensuring a seamless look across devices",
      skills: [
        "Responsive",
        "Mobile",
        "Desktop",
        "Tablet",
        "Breakpoints",
        "Flexbox"
      ],
      imgUrl: "https://i.ibb.co/R4gmsdfJ/image-removebg-preview-2.png"

    },
    {
      title: "Python",
      description: "Creating dynamic and interactive features",
      skills: [
        "Data Types",
        "Lists",
        "Tuples",
        "Dictionaries",
        "OOP Basics",
        "Conditionals",
        "List Comprehension"
      ],
      imgUrl: "https://i.ibb.co/zTDpxk11/image.png"

    },
    {
      title: "C++",
      description: "Implementing core logic and algorithms in C++.",
      skills: [
        "Data Types",
        "Loops",
        "Classes & Objects",
        "Constructors",
        "Destructors",
        "Abstraction",
        "Virtual Functions",
        "Method Overriding",
        "Access Specifiers"
      ],
      imgUrl: "https://i.ibb.co/svpqhKKQ/image.png"

    },
    {
      title: "Genrative AI",
      description: "Build small project using AI.",
      skills: [
        "AI Tools",
        "Using Gradio",
        "Using Streamlit",
        "AI Projects"
      ],
      imgUrl: "https://i.ibb.co/Xk8WBPZs/image.png"

    }
  ]

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-brand-beige/10 px-6 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-brown mb-4">
            Technical <span className="text-brand-gold">Expertise</span>
          </h1>
          <p className="text-xl text-brand-taupe max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities.
          </p>
        </div>


        {/* Skills Grid */}
        <div className=' grid grid-cols-1 md:grid-cols-2 md:mx-7  gap-8 '>
          {skillCategories.map((category, index) => (
            <div key={index} className='bg-white/70 hover:-translate-y-1 transition-all rounded-xl p-6 hover:shadow-md  '>

              <div className='flex items-center gap-4'>
                <img src={category.imgUrl} alt={category.title} className='w-12 h-12 rounded' />
                <div>
                  <h3 className='text-xl font-bold'>{category.title}</h3>
                  <p className='text-gray-600'>{category.description}</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mt-4 '>
                {category.skills.map((skill, index) => (
                  <span key={index} className='hover:bg-brand-gold bg-brand-brown/90  text-white/70 px-4 py-2 rounded-lg text-sm'>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>


        {/* Learning Journey Section */}
        <div className="mt-20 p-8 bg-brand-brown rounded-2xl text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Always Learning</h2>
          <p className="text-brand-cream/80 max-w-2xl mx-auto text-lg">
            I believe in continuous improvement and am currently exploring new technologies like Next.js and Cloud Services to expand my toolkit.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Skill