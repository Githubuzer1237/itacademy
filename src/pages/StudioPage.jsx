import React from 'react'
import Studio from '../components/Studio/Studio'
import Wrapper from '../components/Wrapper/Wrapper'
import Team from '../components/Team/Team'

const StudioPage = () => {
  return (
    <>
    <Studio />
    <Wrapper title='Наша студия' maintitle='Креативная площадка'
     text='Созданная с нуля, студия It Academy была спроектирована и создана для развития творческого сообщества, которая вдохновляет учеников усердно заниматься. Наша студия, расположенная в ГЛАВПОЧТАМПТЕ, воплощает наш идеал «Серьезно игривый» — серьезный спереди, игривый сзади.' linkspan='It Academy' link='/' />
     <Team />
    </>
  )
}

export default StudioPage
