import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'

const Header = ({subheader}) => (
  <header className="header">
    <Logo className="header-logo" />
    <p className="sub-header">{subheader}</p>
  </header>
)

export default Header
