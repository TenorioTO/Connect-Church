import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/background_whitelogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import './header.styles.scss';


class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isToggleOn: false
        }

        
    }



    handleToggle(){
       this.setState({
           isToggleOn: !this.state.isToggleOn
       });
    }

    render(){
        return(
            <header>
                <Link to='/'>
                    <Logo className='logo' />
                </Link>
                <button className='toggle-btn' onClick={(e) => this.handleToggle(e)} >
                    Menu
                </button>
                <nav className={this.state.isToggleOn ? 'toggle' : ''}>
                    <Link to='/us' className='links' >Us</Link>
                    <Link to='/news' className='links' >News</Link>
                    <Link to='/agenda' className='links' >Agenda</Link>
                </nav>
                <Link to='/login' className={`button ${this.state.isToggleOn ? 'button-mobile' : ''}`} >Login</Link>
                <Link 
                    to='/'
                    className={`face-icon-link ${this.state.isToggleOn ? 'face-toggle' : ''}`}>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} 
                        className='face-icon' />
                </Link>
                <Link 
                    to='/'
                    className={`insta-icon-link ${this.state.isToggleOn ? 'insta-toggle': ''}`}>
                        <FontAwesomeIcon icon={['fab', 'instagram-square']}
                        className='insta-icon' />
                </Link>
            </header>
    
        )
    }

}

  

export default Header;