import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg"
import '../styles/Contact.css'
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'  style={{backgroundImage: `url(${PizzaLeft})`}} ></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter Full Name..." type="text"/>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter Email..." type="email"/>
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Enter Message..." rows="6" type="text"/>
                <button type="submit">Send Message</button>
            </form>
        </div>      
    </div>
  )
}

export default Contact;
