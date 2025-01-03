import React, { useState } from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
const Header = () => {
   
   const [active, setActive] = useState(false)

   const toggleBurger = () => {
    setActive(!active)
   }

  return (
  <>
  <header className={s.header}>
      <nav className={s.nav}>
         
      <Link to={'/'} ><img src="/itacademylogo.svg" alt="" className={s.logo} /></Link>

      <div className={`${s.links} ${active ? 'active' : ''  }  `}>
       <Link to={'/'}>smds</Link>
       <Link to={'/'}>smds</Link>
       <Link to={'/studio'}>studio</Link>
       <Link to={'/'}>Курсы</Link>

      </div>

      <Link>Admin</Link>
         
     <div onClick={toggleBurger} className={`${s.burger} ${active ? 'active' : ''  }  `}>
      <span></span>
      <span></span>
     </div>
          

      </nav>
  </header>
  </>
  )
}

export default Header
