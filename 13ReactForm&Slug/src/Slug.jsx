import React, { useEffect, useState } from 'react'
import Input from './Components/Input'


function SlugPractise() {
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const slugTransformation = (value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-") 
                .replace(/\s+/g, "-");
        }
        return " "
    }
    useEffect(() => {
        const newSlug = slugTransformation(title)
        setSlug(newSlug)
    }, [title])
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className=' bg-gray-500 w-[30%] min-h-[70%]  flex flex-col p-4 pt-2 '>
                <p className='text-center font-semibold text-3xl pb-5'>SlugPractise</p>

                <div className='flex flex-col gap-y-5'>
                    <Input
                        label="Your Text : "
                        labelClassName="text-2xl text-red-500 font-semibold px-5"
                        className='w-full rounded p-[3px]'
                        onChange={(e)=>setTitle(e.target.value)}

                    />



                    <Input
                        value={slug}
                        readOnly
                        label="Slug : "
                        labelClassName="text-2xl  text-green-500 font-bold px-5"
                        className='w-full rounded py-[3px] px-[5px]'

                    />
                </div>

                {/* <input type="text" readOnly /> */}





            </div>
        </div>
    )
}

export default SlugPractise