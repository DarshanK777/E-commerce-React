import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-up.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user//user.action'
import {connect} from 'react-redux'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { signUpStart}  = this.props
        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword ){
            alert('passwords don\'t match')
            return
        }

        signUpStart({ displayName, email, password})
    }

    handleChange = event =>{
        const { name, value } = event.target
        this.setState({[name]: value})
    }


    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            
            <div className = 'sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign Up with your Email</span>
            <form className= 'sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
                type= 'input'
                name= 'displayName'
                value = {displayName}
                onChange={this.handleChange}
                label='Display Name'
                required/>

                <FormInput
                type= 'email'
                name= 'email'
                value = {email}
                onChange={this.handleChange}
                label='Email'
                required/>

                <FormInput
                type= 'password'
                name= 'password'
                value = {password}
                onChange={this.handleChange}
                label='Password'
                required/>

                

                <FormInput
                type= 'password'
                name= 'confirmPassword'
                value = {confirmPassword}
                onChange={this.handleChange}
                label='Confirm Password'
                required/>
                
                <CustomButton type='submit'>Sign UP</CustomButton>
            
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp)