import * as React from 'react';

type Props = {};
type State = {
    field: string;
};

class InputText extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            field: ''
        };
        this.onInput.bind(this);
    }

    onInput(event: any) {
        this.setState({ field: event.target.value });
    }

    render() {
        return (
            <div className="is-centered">
                <h1>You&apos;re typing: {this.state.field}</h1>
                <input
                    className="input m-t-m"
                    type="text"
                    onChange={(event) => this.onInput(event)}
                />
            </div>
        );
    }
}

export default InputText;
