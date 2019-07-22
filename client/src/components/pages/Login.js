import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border: 2px solid;
    border-radius: 4px;
    display: block;
    font-weight: bold;
    margin: 2rem auto;
    width: 100%;
    padding: 1rem;
`

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = event => {
        event.preventDefault()
        console.log('login-form, username: ')
        console.log(this.state.username)
        fetch('/', {
            method: 'post',
            body: {
                username: this.state.username,
                password: this.state.password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.data) {
                console.log('successful login')
                this.setState({
                    redirectTo: '/players'
                })
            } else {
                console.log('login error')
            }
        }).catch(error => {
            console.log('login server error: ')
            console.log(error)
        })
  }
  render() {
    return (
        <form className='pa4'>
            <h1 className='lh-title tc'>Log In</h1>
            <div className='mb3'>
                <label className='db f6 mb2' htmlFor='username'>Username</label>
                <input
                    className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                    type='text'
                    name='username'
                    value={this.state.username} />
            </div>
            <div className='mb3'>
                <label className='db f6 mb2' htmlFor='password'>Password</label>
                <input
                    className='b--black-20 br1 ba input-reset ph2 pv1 w-100'
                    type='text'
                    name='password'
                    maxLength='15' />
            </div>
            <Button type='submit'> Log In </Button>
        </form>
    )
  }
}

export default Login
