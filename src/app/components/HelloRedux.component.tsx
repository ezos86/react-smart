import * as React from 'react';
import counter from '../actions/counter.actions';
import { connect } from 'react-redux';

class HelloRedux extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.sayHelloRedux.bind(this);
    }

    sayHelloRedux(event: any) {
        console.log(event);
        this.props.dispatch(counter.increment());
    }

    render() {
        return (
            <div className="hello-redux">
                <h2>{this.props.name}</h2>
                <h3>Local State Counter: {this.props.sample.counter}</h3>
                <button
                    className="button m-t-m"
                    onClick={(event) => this.sayHelloRedux(event)}
                >
                    Redux Hello
                </button>
            </div>
        );
    }
}

const mapState = (state: any) => {
    return {
        sample: {
            counter: state.sample.counter
        }
    };
};

const mapDispatch = (dispatch: any) => {
    return { ...counter, dispatch };
};

export default connect(mapState, mapDispatch)(HelloRedux);
