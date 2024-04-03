import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as AhmadLink } from 'react-router-dom';

const MobileNavLinks = ({ setToggle, link, href }) => {
  return (
    <li className='list-none cursor-pointer mr-6'>
      
        <ScrollLink
          to={href}
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          className='font-bold transition-all duration-300'
          onClick={() => setToggle(prev => !prev)}
        >
           A
        </ScrollLink>
      
    </li>
  );
}

export default MobileNavLinks;
