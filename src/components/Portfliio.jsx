import React from 'react'
import placeholder from '../assets/placeholder.png'
import loadmore from '../assets/loadmore.png'
import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import styled from 'styled-components'
import Title from './Title'

function Portfliio() {
  return (
    <Section id="portfolio">
      <Title value="Portfolio" />
      <div className="background">
        <img src={portfolio1} alt="Design" className='design1'/>
        <img src={portfolio2} alt="Design" className='design2'/>
      </div>
      <div className="portfolio__title">
        <p>Our Works</p>
          <h2>Check our super awesome Portfolio</h2>
      </div>
      <div className="grid">
        <div className="child-one grid-box">
          <img src={placeholder} alt="placeholder"/>
        </div>
        <div className="child-two grid-box">
          <img src={placeholder} alt="placeholder"/>
        </div>
        <div className="child-three grid-box">
          <img src={placeholder} alt="placeholder"/>
        </div>
        <div className="child-four grid-box">
          <img src={placeholder} alt="placeholder"/>
        </div>
        <div className="child-five grid-box">
          <img src={placeholder} alt="placeholder"/>
        </div>
        <div className="child-six grid-box">
          <img src={placeholder} alt="placeholder"/>
        </div>
        <div className="child-seven grid-box">
          <img src={placeholder} alt="placeholder"/>
        </div>
        <div className="child-eight grid-box">
          <img src={placeholder} alt="placeholder"/>
        </div>
      </div>
      <div className="portfolio-more">
        <span>Load More</span>
        <img src={loadmore} alt="Load More"/>
      </div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
padding: 2rem 0;
background-color: var(--secondary-color);
.background {
  position: relative;
  .design1 {
    position: absolute;
    z-index: 1;
    right: 8%;
    top: 0;
  }
  .design2 {
    position: absolute;
    z-index: 1;
    left: 0%;
    top: 30rem;
    height: 40rem;
  }
}
.sideTitle {
  z-index: 2;
  h1 {
    color: white;
  }
}
.portfolio__title {
  margin: 6rem 15rem;
  p {
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  h2 {
    color: white;
    font-size: 2rem;
  }
}
.grid {
  padding: 0 15rem;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-areas:
  "one one two two"
  "one one three four"
  "five six seven seven"
  "eight six seven seven";
  .grid-box{
    height: 15rem;
    width: 100%;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      transition: 0.4s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
    &:nth-of-type(1) {
      grid-area: one;
      height: 100%;
      background-color: #8860e66a;
      z-index: 10;
    }
    &:nth-of-type(2) {
      grid-area: two;
      z-index: 10;
      background-color: #662d91ca;
    }
    &:nth-of-type(3) {
      grid-area: three;
      background-color: #8860e6b0;
    }
    &:nth-of-type(4) {
      grid-area: four;
    }
    &:nth-of-type(5) {
      grid-area: five;
      z-index: 10;
      background-color: #8860e6b0;
    }
    &:nth-of-type(6) {
      grid-area: six;
      height: 100%;
      background-color: #662d91ca;
    }
    &:nth-of-type(7) {
      grid-area: seven;
      height: 100%;
      background-color: #8860e66a;
    }
    &:nth-of-type(8) {
      z-index: 10;
      grid-area: eight;
    }
  }
}
.portfolio-more{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 4rem 0;
  span {
    color: white;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
}
`;

export default Portfliio