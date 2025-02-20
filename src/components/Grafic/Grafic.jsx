

import React from 'react';
import s from './Grafic.module.scss';
import { Link } from 'react-router-dom';
import AboutCurses from '../AboutCurses/AboutCurses';

const Grafic = ( {price} ) => {


  const scrollToConnectSection = () => {
    const section = document.getElementById("zapis");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  
  return (
    <div className={s.banner}>
      <div className={s.content}>
        <div className={s.text} >КУРСЫ</div>
        <div className={s.text} >ГРАФИЧЕСКОГО ДИЗАЙНА</div>
        <div className={s.curs}>
        <p className={s.p}>Научитесь работать с цветом, композицией и шрифтами, создавайте стильные и профессиональные визуалы!</p>
        <b>{price} </b>
         
          <Link className={s.link} > 
              
            <button onClick={scrollToConnectSection}  >Курс мечты</button>
          </Link>
          <AboutCurses duration="6 месяцев" lessons="48"  length="1.5/3 часа" />
        </div>
      </div>
    

    </div>
  );
};

export default Grafic;
