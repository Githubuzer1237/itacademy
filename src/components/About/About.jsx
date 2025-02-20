import React from 'react'
import s from './About.module.scss'
import SpotlightCard from '../SpotlightCard/SpotlightCard'
const About = () => {
  return (
   <>
       <h1 style={{textAlign: 'center', marginTop: "70px", fontFamily: "Soyuz Grotesk", fontSize: "45px"}}>0 нас</h1>
   <div className={s.wrapper}>
 <div className={s.about}>
     <SpotlightCard className={s.custom_spotlight_card} spotlightColor="rgba(0, 29, 255, 0.4)">
 <h2 className={s.item_title}>IT Academy – ваш путь в мир технологий!</h2>
 <p className={s.item_text}>Мы – IT Academy, центр современного обучения в сфере технологий. Наша миссия – сделать IT-доступным каждому. Мы предлагаем актуальные курсы, опытных наставников и практический подход, чтобы вы могли уверенно строить карьеру в IT. Начните свой путь с нами и создавайте будущее уже сегодня!</p>
</SpotlightCard>
     </div>
     <div className={s.ruslan}>
      <img src="/ruslan2.png" alt="" />
     </div>
   </div>



   </>
  )
}

export default About
