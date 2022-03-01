import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.addEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158'
        alt='Netflix_logo'
      />

      <img
        className='nav__avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
        alt='Netflix_Avatar'
      />
    </div>
  );
}

export default Nav;
