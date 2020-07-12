import React, { Component } from 'react'
import FormInput from '../form/FormInput'
import Button from '../form/Button'
import './register.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase-utilities';

export default class Register extends Component {
    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    };

    handleSubmit=async event=>{
        event.preventDefault()

        const {displayName,password,email,confirmPassword}=this.state

        if(password!==confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''

            })

        }catch(error){
            console.log("Error occured at register"+error);
        }
    }

    handleChange=event=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    render() {
        const {displayName,password,email,confirmPassword}=this.state
        const {handleRegister}=this.props
        return (
            <div className='register'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Don't have an account</h2>
                    <span>Register as a new user</span>
                    <FormInput name='displayName' type='text' required label='Username' handleChange={this.handleChange} value={displayName}  />
                    <FormInput name='email' type='email' required label='email' handleChange={this.handleChange} value={email}  />
                    <FormInput name='password' type='password' required label='password' handleChange={this.handleChange} value={password}  />
                    <FormInput name='confirmPassword' type='password' required label='Confirm password' value={confirmPassword} handleChange={this.handleChange} />
                    <Button type='submit' >Register</Button>
                    <span style={{marginLeft:'30px' , cursor:'pointer'}} onClick={handleRegister}>Already an user?</span>
                </form>
            </div>
        )
    }
}
