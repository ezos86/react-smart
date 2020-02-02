import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/login-logo.png';

class Nav extends React.Component<any, {}> {
    constructor(props: any){
        super(props);
    }

    logout(){
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    render() {
        return (
            <div className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img style={{width:'100px'}} src={logo} />
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/games" className="navbar-item">View Games</Link>
                        <Link to="/contact" className="navbar-item">About Project</Link>
                        <div className="navbar-item">
                            <span className="button is-light" onClick={this.logout.bind(this)}>Logout</span>
                        </div>
                        {/* <button className="navbar-item button" onClick={this.logout.bind(this)}>Logout</button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
