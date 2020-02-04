import * as React from 'react';
import logo from '../assets/react-logo.svg';
import { Link } from 'react-router-dom';

type IProps = {
    [key: string]: any;
};

type IState = {
    [key: string]: any;
};

class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
        this.method.bind(this);
    }

    method(event: any) {
        console.log(event);
    }

    render() {
        return (
            <div className="view-content columns is-centered">
                <div className="is-half center-align">
                    <img style={{ width: '300px' }} src={logo} />
                    <h1>React Template</h1>
                    <p className="center-align">Sample Page</p>
                    <div className="is-centered m-t-m">
                        <Link to="/sample" className="button block m-b-m">
                            Goto Sample Page
                        </Link>
                        <button
                            className="button block is-fullwidth"
                            onClick={(event) => this.method(event)}
                        >
                            Sample Event Button
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
