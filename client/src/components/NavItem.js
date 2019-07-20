import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Image = styled.img`
  display: block;
  margin: 0 auto .5rem;
  width: 50%;
`

const NavItem = props => {
  return (
    <Link to={props.url} className='f7 link tc white'>
      <Image src={props.image} alt={props.label} />
      {props.label}
    </Link>
  )
}

export default NavItem