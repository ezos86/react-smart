import * as React from 'react';
import counter from '../actions/counter.actions';
import { connect } from 'react-redux';

type Props = {
    name: string;
};

type State = {
    count: number;
};

class Hello extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
        this.sayHello.bind(this);
    }

    sayHello(event: any) {
        console.log(event);
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div className="hello-local">
                <h2>{this.props.name}</h2>
                <h3>Local State Counter: {this.state.count}</h3>
                <button
                    className="button m-t-m"
                    onClick={(event) => this.sayHello(event)}
                >
                    Local Hello
                </button>
            </div>
        );
    }
}

export default Hello;
