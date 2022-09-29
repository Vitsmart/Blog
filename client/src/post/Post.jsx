import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <div className='post'>
        <img 
        className='postImg'
        src='https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?k=20&m=1181366400&s=612x612&w=0&h=p-iaAHKhxsF6Wqrs7QjbwjOYAFBrJYhxlLLXEX1wsGs='
        alt=''
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                How to grow your programming skills
            </span>
            <hr/>
            <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at temporibus, quis molestiae magni perferendis aperiam quibusdam ipsa doloribus ex sint delectus! Sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae possimus itaque ipsam et minus aperiam aliquam dicta vero corrupti, tempore aliquid cupiditate quibusdam dolores sed. Aperiam commodi cupiditate sit?
        </p>
    </div>
  )
}
