import React from 'react'
import s from './Wrapper.module.scss'
import { Link } from 'react-router-dom'
const Wrapper = ( {title, maintitle, text, link, linkspan } ) => {
  return (
    <>
    <div className={s.wrappersect}>
        <div className="container">
          <div className={s.wrapper}>

          <div>
          <p>{title}</p>
          <h1>{maintitle}</h1>
          </div>

         <div>
          <p>{text}</p>

         <div className={s.linktext}>
         <p>Нажмите чтобы совершить экскурсию по нашей   <span><Link target='blank' to={link}>{linkspan}</Link></span></p>
         </div>

         </div>
     
          </div>
        </div>
    </div>
    </>
  )
}

export default Wrapper
