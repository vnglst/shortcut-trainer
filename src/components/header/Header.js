import React from 'react'
import './Header.css'

const Header = ({logo}) => (
  <header>
    <a href='/'>
      <h1>
        Shortcut Trainer
      </h1>
    </a>
    <img src={logo} className='Logo' alt='logo' />
  </header>
)

export default Header
