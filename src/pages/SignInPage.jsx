import React, { Component } from 'react'
import SignIn from '../components/sign-in/SignIn'
import Register from '../components/register/Register'
import './SignInpage.scss'
export default class SignInPage extends Component {
    state={
        register:true
    };

    handleRegister =()=>{
        this.setState({
            register:!this.state.register
        })
    }
    render() {
        return (
            <div className='page'>
                {this.state.register ? <Register handleRegister={this.handleRegister} />:<SignIn handleRegister={this.handleRegister}/>}
            </div>
        )
    }
}
