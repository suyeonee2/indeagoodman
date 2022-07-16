import React from 'react'
import {BsBehance, BsFacebook, BsTwitter, BsYoutube} from 'react-icons/bs';
import styled from 'styled-components'
import { useScroll } from './useScroll'
import { motion } from 'framer-motion'
import { footerAnimations } from 'animation';

function Footer() {
  const [element, controls] = useScroll();
  return (
    <Foot ref={element}
    variants={footerAnimations} animate={controls}
    transition={{
      delay:0.03,
      type:"tween",
      duration:0.8,
    }}>
      <span> &copy; Template created with love by Kishan Sheth</span>
      <div className="footer__social__icons">
        <BsBehance />
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
      </div>
    </Foot>
  )
}

const Foot = styled(motion.footer)`
background-color: var(--primary-color);
color: white;
display: flex;
justify-content: space-between;
padding: 5rem 10rem;
.footer__social__icons {
  display: flex;
  gap: 2rem;
  svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color: var(--secondary-color);
    }
  }
}
`;

export default Footer