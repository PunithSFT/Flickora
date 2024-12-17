import React, { useState } from 'react';
import Suggestions from './Suggestions';
import Posts from './posts/Posts';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage: "https://it.lakpura.com/cdn/shop/products/LK60400100-04-E-1280-720.jpg?v=1624589437&width=1445",
      likes: 12,
      timestamp: "12h",
    },

    {
      user: "indu_ig",
      postImage: "https://www.heritancehotels.com/ahungalla/wp-content/uploads/sites/20/2019/10/pool2-1.jpg",
      likes: 1000,
      timestamp: "1d",
    },

    {
      user: "samitha_kannangara",
      postImage: "https://www.attractionsinsrilanka.com/wp-content/uploads/2020/04/Idalgashinna-Mountain-1.jpg",
      likes: 1000,
      timestamp: "2d",
    },

    {
      user: "Ayodhyaaa",
      postImage: "https://images.pexels.com/photos/12781424/pexels-photo-12781424.jpeg",
      likes: 1000,
      timestamp: "15h",
    },
  ]);
  return (
    <div className='timeline flex flex-row'>
        <div className='timeline__left flex-[0.7]'>
        <div className='timeline__posts'>
          {posts.map(post => (
            <Posts 
            user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp}/>
          ))}
        </div>
        </div>
        <div className='timeline__right flex-[0.3]'>
        <Suggestions/>
        </div>
    </div>
  )
}

export default Timeline