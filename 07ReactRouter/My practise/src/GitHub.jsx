import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
const data=useLoaderData(getGitHubInfo)

  return (
    <div className='p-3 bg-gray-500 text-white min-h-[250px]'>
<div className='text-center text-3xl'>
    My name is <span className='text-red-500 font-semibold'>Abdul Rehman </span>.
</div>
<div className='flex justify-evenly items-center mt-3'>
    <div>
    Follower : {data.followers}
</div>
<div>
    <img src={data. avatar_url} height={200 } width={200} className='rounded-full' alt="Github" />
</div>
</div>

    </div>
  )
}

export const getGitHubInfo =  async()=>{
     const respone= await  fetch('https://api.github.com/users/codewithabdul89')
     
     return respone.json()
} 

export default GitHub