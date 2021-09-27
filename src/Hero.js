import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {

  const { closeSubmenu } = useGlobalContext()

  return <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className="hero-info">
        <h1>Payments infrastructer for the internet</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cumque assumenda accusamus explicabo corrupti natus amet aut quam magni. Sequi et ipsa dolore! Mollitia, corporis!</p>
        <button className="btn">
          Start now
        </button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} alt="phoneImg" className="phone-img" />
      </article>
    </div>
  </section>
}

export default Hero
