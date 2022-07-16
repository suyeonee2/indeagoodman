import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from '../components/useScroll';
import {motion} from "framer-motion"
import { navAnimations } from '../animation';


export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  return (
    <Nav ref={element} variants={navAnimations} transition={{delay : 0.1}} animate={controls} >
      <div className="brand__container">
        <a href="#" className="brand">
          <img src={logo} alt="Logo" />
        </a>
        <div className="toggle"> </div>
        </div>
        <div className="links">
          <ul>
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
    </Nav>
  );
}
const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  color: white;
  .barnd__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }
.links {
  ul {
    list-style-type: none;
    display: flex;
    gap: 3rem;
    .active {
      a {
        border-bottom: 0.1rem solid var(--secondary-color); 
      }
    }
    li {
      a{
        color: white;
        text-decoration: none;
        font-weight: 400;
        font-size: 1.1rem;
      }
    }
  }
}
`;