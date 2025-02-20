import React from 'react'
import s from './AboutCurses.module.scss'
import SpotlightCard from '../SpotlightCard/SpotlightCard'
const AboutCurses = ({duration, lessons, education, length}) => {
  return (
   <>
   <SpotlightCard className={s.custom_spotlight_card} spotlightColor="rgba(255, 255, 255, 0.25)">
<div className={s.text}>
<div className={s.one}>
<h2 className={s.item_title}>Длительность курса:</h2>
<p className={s.item_text}> {duration} </p>
</div>
<div className={s.one}>
<h2 className={s.item_title}> Количество уроков:</h2>
<p className={s.item_text}>{lessons} </p>
</div>
<div className={s.one}>
<h2 className={s.item_title}>Форматы обучения:</h2>
<p className={s.item_text}>офлайн</p>
</div>
<div className={s.one}>
<h2 className={s.item_title}>Длительность урока:</h2>
<p className={s.item_text}> {length} </p>
</div>
</div>
</SpotlightCard>
   </>
  )
}

export default AboutCurses