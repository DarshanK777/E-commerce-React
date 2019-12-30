import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'


class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault()

        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {value, name} = event.target 
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className = 'sign-in'>
            <h2>I already have a account </h2>
            <span>Sign in with your Email and Password </span>
            <form onSubmit = {this.handleSubmit}>

            <FormInput name='email' value ={this.state.email} handleChange={this.handleChange} label ='Email' type='email' required/>
            <FormInput name='password' value ={this.state.password} handleChange={this.handleChange} label="Password" type='password' required/>
            
            <div className = 'button'>
            <CustomButton type='submit'> Sign In </CustomButton>
            <CustomButton onClick = { signInWithGoogle } isGoogleSignIn> Sign In Google</CustomButton>
            </div>
            </form>                
            </div>
        );
    }
}

export default SignIn;