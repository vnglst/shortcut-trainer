import React from 'react'
import './Header.css'

const Header = ({logo}) => (
  <div className='App-header'>
    <h2>
      Shortcut Trainer
    </h2>
    <img src={logo} className='Logo' alt='logo' />
  </div>
)

export default Header
