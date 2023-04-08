import React, { useContext } from 'react'
import "../index.css"
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {
  const {theme, changeTheme}= useContext(ContextGlobal)

  function ToggleTheme(){
    changeTheme()
  }

  return (
    <nav className={`nav ${theme}`}>
      <img src='/images/DH.png' alt='DH' />
      <div>
        <a  href="/home"> Home</a>
        <a  href="/contact"> Contacto</a>
        <a  href="/favs"> Favoritos</a>

        <button onClick={ToggleTheme} className='changeButton'>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar