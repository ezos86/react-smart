import * as React from 'react';
import axios from 'axios';
import logo from '../assets/login-logo.png';
import { Link } from 'react-router-dom';

interface ILoginState {
    login_status: string,
    error_msg: string
}

class Login extends React.Component<any, ILoginState> {
    constructor(props:object){
        super(props);
        this.state = {
            login_status: '',
            error_msg: ''
        };
    }

    formSubmit(event:any) {
        event.preventDefault();
        const email = event.target.elements['email'].value;
        const password = event.target.elements['password'].value;
        const base_url = process.env.NODE_ENV != 'development' ? 'http://battleship.smartass.io' : 'http://localhost:8001';
        axios.post(base_url + '/auth/login', { email, password}).then((response) => {
            localStorage.setItem('uid', response.data.data.uid);
            localStorage.setItem('token', response.data.data.token);
            this.props.history.push('/games');
        }).catch((error) => {
            this.setState({login_status: 'error', error_msg: error.response.data.msg});
        });
    }

    closeNotification(){
        this.setState({login_status: ''})
    }

    componentDidMount(){
        // Add Token to redux.
        let token = localStorage.getItem('token');
        if(token){
            this.props.history.push('/games');
        }
    }

    render() {
        let notification;
        if(this.state.login_status == 'error'){
            notification = <div className="notification is-danger"><button className="delete" onClick={this.closeNotification.bind(this)}></button>{this.state.error_msg}</div>;
        }
        return (
            <div className="login-container">
                <div className="columns is-mobile is-centered">
                    <div className="login-logo">
                        <a href="/"><img style={{width:'300px'}} src={logo} /></a>
                    </div>
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="form-container">
                        <h4 className="m-b-m">Login to your Star Wars Battleship Account.</h4>
                        {notification}
                        <form className="login-form" onSubmit={this.formSubmit.bind(this)}>
                            <div className="field">
                                <div className="control">
                                    <input className="input" name="email" type="email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input className="input" name="password" type="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="m-t-m">
                                <button className="button is-dark is-fullwidth m-b-m">Login</button>
                                <Link to="/register" className="button is-white is-fullwidth">Register</Link>
                            </div>
                        </form>
                        <div className="center-align m-t-m">
                            <Link to="/contact">About Project</Link>
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Login;