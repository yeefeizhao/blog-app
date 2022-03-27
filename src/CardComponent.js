import { Modal, Button } from '@material-ui/core';
import React, { useState } from "react";
import BlogComponent from './BlogComponent';
import "./CardComponent.css";

function CardComponent({ title, author, date, image, description, content }) {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }

  const handleOpen = () => {
      setOpen(true);
  }

  return (

    
    <div className = 'card_component'>
      <div className='card_container'>
        <div className='card'>
            <img src ={image} alt =''/>
            <p>{date}</p>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <div className='card_desc'>{description}</div>
            <div className='card_textbox'>
              <button className='blog_button' onClick={handleOpen}>Open Blog</button>
            </div>

            <Modal 
              className = 'modal'
              open={open}
            >
              <div className='card_blog_component'>
                <BlogComponent 
                date={date}
                author={author}
                title={title} 
                content={content}
                />
                
                <Button color="secondary" className='close_icon' onClick={handleClose}>Close</Button>
              </div>
            </Modal>

        </div>
      </div>
        
    </div>
  )
}

export default CardComponent;