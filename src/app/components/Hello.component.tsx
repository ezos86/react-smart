import * as React from 'react';

type Props = {
    name: string;
};
type State = {
    count: number;
};

class Hello extends React.Component<Props, State> {
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
        alert(`Hello  ${this.state.count} ${this.props.name}`);
    }

    render() {
        return (
            <div>
                <h1>
                    Hi {this.props.name} - {this.state.count}
                </h1>
                <button
                    className="button m-t-m"
                    onClick={(event) => this.sayHello(event)}
                >
                    Click me to say Hello!
                </button>
            </div>
        );
    }
}

export default Hello;
