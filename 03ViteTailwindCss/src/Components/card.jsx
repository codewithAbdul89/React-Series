import React from 'react'

function myname(){
    return(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    )
}

function Card({username,btnvalue="View Profile →",Details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"}) {
     
    return (
       
  <div className=" mt-10 relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg">
    
    <img src="https://i.ibb.co/8FsZPHj/hello.jpg" alt="hello" className="w-full h-full object-cover"/>

  
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 flex flex-col justify-end">
      <div className="text-white">
        <h2 className="text-lg font-semibold">{username}</h2>
        <p className="text-sm text-gray-300 mt-1">
          {Details}
        </p>
        <button className="mt-4 inline-flex items-center text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition">
          {btnvalue }
        </button>
      </div>
    </div>
  </div>


    )
}

export default Card
