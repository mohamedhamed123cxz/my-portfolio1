// @ts-nocheck
import React, { useState } from 'react';
import "./main.css";
import { motion, AnimatePresence } from 'framer-motion';

const myProjects = [
  {
    projectTitle: "loan-project",
    subTitle: "Website using HTML & CSS",
    link: "https://html-css1-blond.vercel.app/",
    github: "https://html-css1-blond.vercel.app/",
    category: "css",
    imgPath: "./portfolio-1.jpg"
  },
  {
    projectTitle: "Kasper",
    subTitle: "Website using HTML & CSS",
    link: "https://html-css2-two.vercel.app/",
    github: "https://github.com/mohamedhamed123cxz/html-css2",
    category: "css",
    imgPath: "./portfolio-2.jpg"
  },
  {
    projectTitle: "Articles-project",
    subTitle: "Website using HTML & CSS",
    link: "https://html-css3-6l8503pwg-mohamedhamed123cxzs-projects.vercel.app/",
    github: "https://github.com/mohamedhamed123cxz/html-css3",
    category: "css",
    imgPath: "./portfolio-3.jpg"
  },
  {
    projectTitle: "Hamd-ecommerce",
    subTitle: "A website for showcasing men's and women's clothing",
    link: "https://hamad-ecommerce.vercel.app/",
    github: "https://github.com/mohamedhamed123cxz/hamad-ecommerce",
    category: "js",
    imgPath: "./mens-banner.jpg"
  },
  {
    projectTitle: "accounting-project",
    subTitle: "A website for managing a product management system",
    link: "https://accounting-project-beta.vercel.app/",
    github: "https://github.com/mohamedhamed123cxz/hamad-ecommerce",
    category: "js",
    imgPath: "./5.jpg"
  },
  {
    projectTitle: "Bootstrap-project",
    subTitle: "A website using Bootstrap",
    link: "https://bootstrap-project-sand.vercel.app/",
    github: "https://github.com/mohamedhamed123cxz/bootstrap-project",
    category: "bootstrap",
    imgPath: "./bootstrap.jpg"
  },
  {
    projectTitle: "Gemini-Clone",
    subTitle: "A website that provides an interactive chat experience using advanced language models to analyze and understand text",
    link: "https://gemini-clone22-9u43s3ldp-mohamedhamed123cxzs-projects.vercel.app/",
    github: "https://github.com/mohamedhamed123cxz/gemini-clone22",
    category: "react",
    imgPath: "./user_icon-BYrw3k3X.png" 
  },
  {
    projectTitle: "React-Travel",
    subTitle: "A website for adding any website that has a name and link, I can delete any website or make any view link of the website",
    link: "https://github.com/mohamedhamed123cxz/react-travel",
    github: "https://github.com/mohamedhamed123cxz/react-travel",
    category: "react",
    imgPath: './travel.jpg' 
  },
  {
    projectTitle: "Real-State",
    subTitle: "A website for adding products that have a name, category, price, and description. I can search for them and delete any product",
    link: "https://real-state-theta-two.vercel.app/",
    github: "https://github.com/mohamedhamed123cxz/real-state",
    category: "react",
    imgPath: "./r1.png" 
  },
  {
    projectTitle: "Weather App",
    subTitle: "A website to determine the weather for 3 days by specifying your location and the country in which you are located",
    link: "https://weather-my1n4pnhy-mohamedhamed123cxzs-projects.vercel.app/",
    github: "https://github.com/mohamedhamed123cxz/weather-app",
    category: "js",
    imgPath: "./weatherbanner.png" 
  }
]

export default function Main() {
  const [currentActive, setCurrentActive] = useState('all');
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => item.category === buttonCategory);
    setArr(newArr);
  }

  return (
    <main className='flex'>
      <section className='leftSection'>
        <button onClick={() => { setCurrentActive("all"); setArr(myProjects); }} className={currentActive === "all" ? 'active' : null}>All Projects</button>
        <button onClick={() => { handleClick("css"); }} className={currentActive === "css" ? 'active' : null}>HTML & CSS</button>
        <button onClick={() => { handleClick("js"); }} className={currentActive === "js" ? 'active' : null}>JavaScript</button>
        <button onClick={() => { handleClick("bootstrap"); }} className={currentActive === "bootstrap" ? 'active' : null}>Bootstrap</button>
        <button onClick={() => { handleClick("react"); }} className={currentActive === "react" ? 'active' : null}>React</button>
      </section>

      <section className='rightSection'>
        <AnimatePresence>
          {arr.map((item) => (
            <motion.div
              layout
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 8 }}
              key={item.imgPath} className='card'
            >
              <div>
                <img src={item.imgPath} width={266} height={200} alt="" />
              </div>
              <div className="box" style={{ width: "266px" }}>
                <h3 className='title'>{item.projectTitle}</h3>
                <p className='subTitle'>{item.subTitle}</p>
                <div className='icons flex'>
                  <div className='flex' style={{ gap: "11px" }}>
                    <div> <a className='icon-link' target='_blank' href={item.link} rel="noopener noreferrer"></a> </div>
                    <div> <a className='icon-github' target='_blank' href={item.github} rel="noopener noreferrer"></a></div>
                  </div>
                  <a className='flex link' href="">more
                    <span className='icon-arrow-right' style={{ alignSelf: 'end' }}></span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}
