import React from 'react'
import Image from 'next/image'

export default function Post({posts}) {
  return (
    <div className=' relative '>
       {posts.data.map(post => (  
        <div key={post.id} className='container flex items-center
         justify-center gap-3 border-b pb-5 mb-2
        '>            
        <div className=' w-[70%] rounded-md mt-2 
        items-center justify-center pl-5
        '  post={posts}>
            <h2 className='capitalize text-2xl'>
                {post.attributes.title}
            </h2>
            <p className='initial'>
                At vero eos et accusamus et iusto odio dignissimos ducimus
                 qui blanditiis praesentium voluptatum deleniti atque corrupti 
                 quos dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt 
                 .
            </p>
            <p className='mt-2'>
                <b className='uppercase bg-yellow-400 rounded-md px-1 
                shadow-2xl'>
                    javascript
                </b>
                <b className='mx-2'>
                    5 Minutes Read
                </b> 
                <i className='mx-20'>Posted on : Aug-2-2022</i>                            
                 
            </p>
        </div>
        <div className='img h-40 w-40 relative mt-2'>
            <Image src="https://bit.ly/3eXoxpH" alt="hi" layout='fill'
            className=' rounded-2xl '/>
        </div>
         </div> 
      ))}
    </div>


  )
}
