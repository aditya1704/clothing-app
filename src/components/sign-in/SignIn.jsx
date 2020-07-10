import React, { Component } from 'react'
import FormInput from '../form/FormInput'
import './sign-in.scss'
import Button from '../form/Button'
import {signInWithGoogle} from '../../firebase/firebase-utilities';
export default class SignIn extends Component {

    state={
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
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} label='email' value={this.state.email} required />
                    <FormInput name='password' type='password' handleChange={this.handleChange} label='password' value={this.state.password} required />
                    <div className='buttons'>
                        <Button type='submit' value='Submit form'>Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</Button> 
                        <span style={{marginTop:'10px',fontSize:'20px', cursor:'pointer'}} onClick={handleRegister}>Register</span>
                    </div>
                </form>
            </div>
        )
    }
}
