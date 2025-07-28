import React from 'react'
import { data, useActionData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data=useLoaderData(gitHubInfoLoader)

    return (
        <div className="text-center text-3xl rounded m-4 p-4 bg-gray-600 text-white">



           <div>
            <div className='flex justify-center items-center'> GitHub Follwers   {data.followers}</div>
           </div>
           <div className='flex justify-center items-center mt-5'>
            <img src={data. avatar_url } alt="Git pic"  height={300} width={300} className='rounded-full' />

           </div>

        </div>
    )
}

export default GitHub


export const gitHubInfoLoader =  async()=>{
     const respone= await  fetch('https://api.github.com/users/codewithabdul89')
     
     return respone.json()
} 