import React from 'react'
import AppWriteService from "../appWrite/config"
import { Container, PostCard } from '../Component'
import { useState } from 'react'
function AllPosts() {
    const [posts, setPosts] = useState([])
    AppWriteService.getPosts([]).then((post)=>{
        if(post){
            setPosts(post.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div key={post.$id} >
                                <PostCard className="p-2 w-1/4" post={post}/>
                            </div>
                        )

                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts