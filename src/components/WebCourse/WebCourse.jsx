import React from 'react'
import s from './WebCourse.module.scss'
import { Link } from 'react-router-dom'
import Background3D from '../Background3D/Background3D'
import AnimatedSpan from '../AnimatedSpan/AnimatedSpan'
import AboutCurses from '../AboutCurses/AboutCurses'

const WebCourse = ( {price} ) => {
  console.log('Цена курса WebCourse:', price); 

  
  const scrollToConnectSection = () => {
    const section = document.getElementById("zapis");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <section id='courses' className={s.hero}>
      <div className={s.background}>
          <Background3D />
        </div>
        <div className="containersmth">
          <div id='web' className={s.wrap}>
            <h1><AnimatedSpan>Курсы Веб Программирования</AnimatedSpan></h1>
            <p>  Изучите самые актуальные технологии веб-разработки и станьте мастером своего дела.</p>

            <div className={s.inner}>
              <b>{price} </b>
              <Link onClick={scrollToConnectSection}> → Курс мечты</Link>
            </div>
          </div>

          
          <AboutCurses duration="8 месяцев" lessons="64" education="Очно/Онлайн" length="120 минут" />

        </div>
      

      </section>
    </>
  )
}

export default WebCourse;