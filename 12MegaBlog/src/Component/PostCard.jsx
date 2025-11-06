import React from 'react'
import appwrtieService from "../appWrite/config"
import { Link } from 'react-router-dom'
function PostCard({
    $id, title, featuredImage
}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className=''>
                    <img src={appwrtieService.getFilePreview(featuredImage)} alt={title}
                        className='rounded-xl' />
                </div>
                
                <h2 className='text-xl font-bold'>{title}</h2>

            </div>
        </Link>
    )
}

export default PostCard