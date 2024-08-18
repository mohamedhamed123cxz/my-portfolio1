import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contact.css";
import Lottie from "lottie-react";
import sendAnimation from '../../../public/animation/contact.json';

export default function Contact() {

  const [state, handleSubmit] = useForm("mdknebqn");

  if (state.succeeded) {
    return <p className='msgThanks'>Thank you for your message !</p>;
}
  return (
    <section className='contactUs'>
      <h2 className='title'>
        <span className='icon-envelope'></span>
        Contact me
      </h2>
      <p className='subTitle'>Contact me for more information and Get notified when I publish something new</p>

      <div className='flex box'>
        <form onSubmit={handleSubmit}>
          <div className='flex'>
          <label htmlFor="email">Email Address:</label>
          <input required type="email" id='email' name='email' />
          <ValidationError 
           prefix="Email" 
           field="email"
           errors={state.errors}
          />
          </div>
          <div className='flex' style={{marginTop:'30px'}}>
          <label htmlFor="message">Your Message:</label>
          <textarea required name="message" id="message"></textarea>
          <ValidationError 
           prefix="Message" 
           field="message"
           errors={state.errors}
          />
          </div>
          <button className='submit type="submit" disabled={state.submitting}'>
            {state.submitting ? "Submitting" : "Submit"}
          </button>
        </form>
        <div className="animation">
          <Lottie 
          loop={true}
          style={{height:350}}
          animationData={sendAnimation}
          />
          
        </div>
      </div>

    </section>
  )
}
