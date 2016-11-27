import React from 'react'
import './Header.css'

const Header = ({logo}) => {
  const Logo = logo ? <img src={logo} className='Logo' alt='logo' /> : <span />
  return (
    <header>
      <a href='/'>
        <h1>
          Shortcut Trainer
        </h1>
      </a>
      {Logo}
    </header>
  )
}

export default Header
