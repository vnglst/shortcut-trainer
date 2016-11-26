import React from 'react'
import './Header.css'

const Header = ({logo}) => (
  <header>
    <h2>
      Shortcut Trainer
    </h2>
    <img src={logo} className='Logo' alt='logo' />
  </header>
)

export default Header
