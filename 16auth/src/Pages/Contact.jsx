import { callIcon, locationIcon, emailIcon, sendIcon } from '../assets/Icons';
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { conf } from '../Conf/conf.js'
import { setLoading, clearLoading, showPopup } from '../Components/PopUpSlice'
import { useDispatch } from 'react-redux'

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch()
  const onSubmit = async (data) => {
    try {
      dispatch(setLoading())
      await emailjs.send(
        conf.serviceID,
        conf.templateID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        }, conf.publicKey)
      dispatch(showPopup({ message: "Message sent successfully", type: "success" }))

      reset()

    } catch (error) {
      console.log(error)
      dispatch(showPopup({ message: error.message, type: "error" }))
    }
    finally {
      dispatch(clearLoading())
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-brand-beige/10 px-4 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full ">
        <div className='animate-slide-in mt-8 mb-16'>
          <h1 className="text-6xl  font-bold text-center text-brand-brown">Contact
            <span className='text-brand-gold '> Me</span>
          </h1>
          <p className='text-xl text-brand-taupe max-w-2xl mx-auto text-center mt-6'>Let's get in touch! Feel free to reach out to me via email or connect with me on social media.</p>
        </div>

        <div className='bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row'>
          {/* Contact Info Section */}
          <div className="flex-1 bg-gradient-to-b from-brand-gold to-brand-beige  p-10  text-white flex flex-col md:justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className=" mb-8 text-lg">
                Have a project in mind or just want to say hi? Feel free to send me a message!
              </p>

              <div className="flex flex-col gap-y-4">

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">{emailIcon}</div>
                  <div className="text-lg break-all min-w-0">muabdulrehman58@gmail.com</div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">{locationIcon}</div>
                  <div className="text-lg">Faisalabad,Pakistan </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">{callIcon}</div>
                  <div className="text-lg">+92-3290856503</div>
                </div>

              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1 p-10 sm:p-4 bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-gold'} focus:outline-none focus:ring-2 transition duration-200`}
                  placeholder="Ali"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email Address</label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-gold'} focus:outline-none focus:ring-2 transition duration-200`}
                  placeholder="ali  @example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-gold'} focus:outline-none focus:ring-2 transition duration-200`}
                  placeholder="Project Inquiry"
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-gold'} focus:outline-none focus:ring-2 transition duration-200`}
                  placeholder="Tell me about your project..."
                  {...register("message", { required: "Message is required." })}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r text-lg from-brand-gold to-brand-beige text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-slate-400 transform transition hover:scale-[1.02] shadow-lg flex items-center justify-center"
              >
                Send Message <span className="ml-2 inline-block">{sendIcon}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact