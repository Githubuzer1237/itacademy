import React from 'react'
import Studio from '../components/Studio/Studio'
import Wrapper from '../components/Wrapper/Wrapper'
import Team from '../components/Team/Team'
import GridDistortion from '../components/GridDistortion/GridDistortion'
import InfiniteMenu from '../components/InfiniteMenu/InfiniteMenu'

const StudioPage = () => {

  const items = [
    {
      image: 'it1.png',
      link: '/branches',
    },
    {
      image: 'it2.png',
      link: '/branches',
    },
    {
      image: 'it3.png',
      link: '/branches',
    },
    {
      image: 'it4.png',
      link: '/branches',
    },
    {
      image: 'it5.jpg',
      link: '/branches',
    }
  ];
  




  return (
    <>
    <Studio />
    <div style={{ width: '100%', height: '700px', position: 'relative' }}>
  <GridDistortion
    imageSrc="https://picsum.photos/1920/1080?grayscale"
    grid={10}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className="custom-class"
  />
</div>





    <Wrapper title='Наша студия' maintitle='Креативная площадка'
     text='Более четырёх лет IT-Academy успешно
обучает жителей Ташкента современным направлениям в сфере информационных технологий. Наша цель — развивать ваши навыки и создавать сообщество единомышленников.' linkspan='It Academy' link='https://maps.app.goo.gl/FQ2SQAhLQDDaaKGd6' />




     <div style={{ height: '700px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>



     <div style={{ width: '100%', height: '700px', position: 'relative' }}>
  <GridDistortion
    imageSrc="https://picsum.photos/1920/1080?grayscale"
    grid={10}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className="custom-class"
  />
</div>
     <Team />
   
      



    </>
  )
}

export default StudioPage
