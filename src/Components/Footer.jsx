import React, { useContext } from 'react'
import "../index.css"
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const {theme}= useContext(ContextGlobal)
  return (
    <footer className={`footer ${theme}`}>
        <img src='/images/DH.png' alt='DH' />
        <div>
          <img src='images/ico-facebook.png' className='footer-icon' alt='facebook'/>
          <img src='images/ico-instagram.png' className='footer-icon' alt='instagram'/>
          <img src='images/ico-whatsapp.png' className='footer-icon' alt='whatsapp'/>
          <img src='images/ico-tiktok.png' className='footer-icon' alt='tiktok'/>
        </div>
    </footer>
  )
}

export default Footer