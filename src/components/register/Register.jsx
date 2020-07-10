import React, { Component } from 'react'
import FormInput from '../form/FormInput'
import Button from '../form/Button'
import './register.scss'

export default class Register extends Component {
    state={
        username:'',
        email:'',
        password:''
    };

    handleSubmit=event=>{
        event.preventDefault()
    }

    handleChange=event=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    render() {
        const {handleRegister}=this.props
        return (
            <div className='register'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Don't have an account</h2>
                    <span>Register as a new user</span>
                    <FormInput name='username' type='text' required label='Username' handleChange={this.handleChange} value={this.state.username}  />
                    <FormInput name='email' type='email' required label='email' handleChange={this.handleChange} value={this.state.email}  />
                    <FormInput name='password' type='password' required label='password' handleChange={this.handleChange} value={this.state.password}  />
                    <FormInput name='confirm password' type='password' required label='Confirm password' value='' handleChange={this.handleChange} />
                    <Button type='submit' value='Submit form'>Register</Button>
                    <span style={{marginLeft:'30px' , cursor:'pointer'}} onClick={handleRegister}>Already an user?</span>
                </form>
            </div>
        )
    }
}
