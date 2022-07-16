import React from 'react'
import styled from 'styled-components'
import home from "../assets/home.png"
import play from "../assets/play.png"
import Navbar from './Navbar'

export default function Home() {
  return (
    <Section id="home">
      <Navbar />
      <div className="home">
        <div className="content">
          <div className="title">
            <h1>Digital Crafters</h1>
          </div>
          <div className="subTitle">
            <p>
            The not errors rendering handed he you concepts fate objective
            rare boss a road a he while what before to he is size separated
            room cold hunt by and they my
            </p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </div>
      <div className="info">
        <div className="grid">
          <div className="col">
            <strong>Agency</strong>
            <p>Digital Crafters</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>kishansheth21@gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+91 1231231131</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>Some Street India,</p>
            <p>960105 India</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Corporate Identity</p>
            <p>Full Coding</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Monday to Friday</p>
            <p>08:00 to 18:00</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
    .subTitle {
      p {
        width: 70%;
        margin-bottom: 2rem;
      }
    }
  }
 }
 .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    color: white;
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
    }
  }
`;