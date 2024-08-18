import { useEffect, useRef, useState } from 'react';
import './header.css';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMood") ?? 'dark');
  const modalRef = useRef(null);

  // Effect to handle theme changes
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('currentMood', newTheme);
    setTheme(newTheme);
  };

  // Handle click outside of modal to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='flex'>
      <div></div>
      <nav>
        <ul className='flex'>
          <li><a href="#up">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className='flex boxmedia'>
        <button className='menu' onClick={() => setShowModal(true)}>
          <span className='icon-menu3'></span>
        </button>
        <button className='mode' onClick={toggleTheme}>
          {theme === 'dark' ? (<span className='icon-sun'></span>) : (<span className='icon-moon-stroke'></span>)}
        </button>
      </div>
      
      {showModal && (
        <div className='fixed'>
          <ul className="modal" ref={modalRef}>
            <li><button className='icon-cross' onClick={() => setShowModal(false)} /></li>
            <li><a href="#up">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
