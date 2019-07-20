import React from 'react'
import NavItem from './NavItem'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  align-content: center;
  background-color: black;
  display: flex;
  width: 100%;
`

/**
 * Link: Provides declarative, accessible navigation around your application.
 * navigates our application to another route when clicked, just like an anchor tag.
 * But the Link component prevents our entire React application from reloading when we go to different URLs.
 * Instead, only the components that need to change will change.
 */
function Nav () {
  return (
    <NavWrapper>
      <NavItem url='/' image='/images/home.png' label='Home' />
      <NavItem url='/players' image='/images/players.png' label='Players' />
      {/* <Link to='/' className={window.location.pathname === '/' ? 'active' : 'link'}>
        Home
      </Link>
      <Link to='/players' className={window.location.pathname === '/players' ? 'active' : 'link'}>
        Players
      </Link> */}
    </NavWrapper>
  )
}

export default Nav
