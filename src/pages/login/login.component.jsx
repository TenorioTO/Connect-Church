import React, {Component} from 'react';
import {auth} from '../../firebase/firebase.util';
import FormInput from '../../components/form-input/form-input.component';

import './login.styles.scss';


class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email , password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch(e) {
            console.log(e);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }


    render(){
        return(
            <div className="container-signin">
                <div className='sign-in'>
                    <h2>Sign In</h2>

                    <form onSubmit={this.handleSubmit} className='form-signin'>
                        <FormInput 
                            name='email' 
                            type='email' 
                            value={this.state.email}
                            handleChange={this.handleChange} 
                            label='email'
                            required />

                        <FormInput 
                            name='password' 
                            type='password' 
                            value={this.state.password} 
                            handleChange={this.handleChange}
                            label='password'
                            required />

                        <div className="buttons">
                            <button type='submit' className='sign-in-button'>
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }


}

export default Login;