import React from 'react';
import Link from 'react';
import './hero.css';
import Lottie from "lottie-react";
import heroAnimation from '../../../public/animation/hero.json';
import myimage from '../../../public/my_image.png';

export default function Hero() {
  return (
    <section className='hero flex'> 
      <div className="left-section">
        <div className="parent-avatar flex">
          <img className='avatar' src={myimage} alt="my-image" />
          <div className='icon-verified'></div>
          </div>
          <h1 className='title'>FRONT-END DEVELOPER</h1>
          <p className='subTitle'>I am <i>Mohamed Hamd</i> , I am eager to leverage my technical skills and creative problem-solving abilities to build intuitive and engaging user interfaces. My academic background, combined with hands-on projects, has prepared me to tackle complex challenges and contribute effectively to a dynamic development team.


           <span>
           <a target='_blank' href="https://drive.google.com/file/d/1tDhMU6kdPLnUuhcLKIU0MEUE6kC-QhlC/view?usp=sharing">view my cv</a>
           </span>
           </p>
           
          <div className="AllIcons flex">
            <div>
              <a className="icon icon-instagram" target='_blank' href="https://www.instagram.com/mohamed.hamad12/"></a>
            </div>
            <div>
            <a className="icon icon-twitter" target='_blank' href="https://x.com/Mohamed01383371"></a>
            </div>
            <div>
            <a className="icon icon-github" target='_blank' href="https://github.com/mohamedhamed123cxz"></a>
            </div>
            <div>
            <a className="icon icon-linkedin" target='_blank' href="www.linkedin.com/in/mohamed-walid-152865243"></a>
            </div>
          </div>

      </div>
      <div className="right-section animation">
      <Lottie 
          loop={true}
          style={{height:600}}
          animationData={heroAnimation}
          />
      </div>
      </section>
  )
}
