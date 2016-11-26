import React from 'react'
import './Header.css'

const Header = ({logo}) => (
  <header>
    <h1>
      Shortcut Trainer
    </h1>
    <img src={logo} className='Logo' alt='logo' />
  </header>
)

export default Header
