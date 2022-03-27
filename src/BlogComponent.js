
import React from "react";
import "./BlogComponent.css";

function BlogComponent({ title, author, date, image, content }) {
 
  return (
    <div className = 'blog_component'>
      <div className='blog_container'>
        <div className='blog'>
          <div className='blog_header'>
            <p className='date'>{date}</p>
            <p className='author'>By: {author}</p>
          </div>
          <h2>{title}</h2>
          <div className='blog_content'>{content}</div>
        </div>
      </div>
      
    </div>
  )
}

export default BlogComponent;