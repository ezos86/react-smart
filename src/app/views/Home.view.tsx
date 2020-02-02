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
            <div className="view-content">
                {logo}
                <h1>React Template</h1>
                <p>Sample Page</p>
                <div className="is-centered">
                    <Link to="/sample" className="button">
                        Goto Sample Page
                    </Link>
                    <button
                        className="button"
                        onClick={(event) => this.method(event)}
                    >
                        Sample Event Button
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;
