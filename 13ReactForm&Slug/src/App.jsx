import Input from './Components/Input'
import Button from './Components/Button'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.body.classList.add("bg-gray-500")
  }, [])
  const {
    handleSubmit,
    register,
    formState: { errors,isSubmitting },
    watch,
    reset
  } = useForm()


  
   async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,3000))

  console.log("USERNAME IS ----",data.userName)

reset()

  }


  return (
    <div className='bg-gray-500 w-full h-screen flex justify-center items-center'>
      <div className='w-[33%]  bg-gray-300 rounded-lg p-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`${Object.keys(errors).length > 0 ? "space-y-2" : "space-y-5"}`}>

            <Input
              label="Name"
              labelClassName="text-center font-semibold  text-xl"
              className={`${errors.userName ? "border-red-500 border-2 focus:outline-red-500" : "focus:outline-green-500 border-black border-[1.4px]"} capitalize  py-1 px-2 rounded-lg`}
              {...register('userName', {
                required: "UserName is Required.",
                minLength: { value: 3, message: 'UserName must  be  consists of at least 3 letter.' },
                maxLength: { value: 200, message: 'UserName must be lesss then 20 Letter.  ' },
              })}
            />
            {errors.userName && <p className='text-center text-red-500 '>{errors.userName.message}</p>}


            <Input
              label="Email"
              labelClassName="text-center font-semibold  text-xl"
              className={`${errors.email ? "border-red-500 border-2 focus:outline-red-500" : "focus:outline-green-500 border-black border-[1.4px]"}  py-1 px-2 rounded-lg`}
              {...register('email', {
                required: { value: true, message: "Email is Required." },
                validate: {
                  matchPatern: value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email must be Valid."
                }
              })}
            />
            {errors.email && <p className='text-center text-red-500'>{errors.email.message}</p>}


            <Input
              label="Password"
              type='password'
              labelClassName="text-center font-semibold  text-xl"
              className={`${errors.password ? "border-red-500 border-2 focus:outline-red-500" : "focus:outline-green-500 border-black border-[1.4px]"}  py-1 px-2 rounded-lg`}
              {...register('password', {
                required: { value: true, message: "Password must be required." },
                minLength: { value: 8, message: "At least 8 digit is required for password." },
                maxLength: { value: 12, message: "Maximium length will be 12 for password." }

              })}
            />
            {
              errors.password && <p className='text-center text-red-500'>{errors.password.message}</p>
            }


            <Input
              label="Confirm Password"
              type='password'
              labelClassName="text-center font-semibold  text-xl"
              className={`${errors.password ? "border-red-500 border-2 focus:outline-red-500" : "focus:outline-green-500 border-black border-[1.4px]"}  py-1 px-2 rounded-lg`}
              {
                ...register('confirmPassword',{
                  required:"Confirm Password is required.",
                 validate:(value)=>value===watch('password') || "Password does not match"
                })
              }
            />
            {
              errors.confirmPassword && <p className='text-center  text-red-500'>
                { errors.confirmPassword.message}
              </p>
            }
          </div>


          <div className='flex justify-center items-center'>
            <Button
              buttonText={isSubmitting?"Sumitting...":"Submit"}
              type='submit'
              disabled={isSubmitting}
              className={`${isSubmitting ? "bg-green-500" : "bg-blue-500"} bg-blue-500 text-white py-[8px] px-6 rounded-lg mt-5 hover:opacity-55`}
            />
            <button
            disabled
            
            ></button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default App
