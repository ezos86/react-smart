import * as React from 'react';
import Hello from '../components/Hello.component';
import '../styles/components/sample.scss';

class Sample extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    goPage() {
        this.props.history.push('/contact');
    }

    render() {
        return (
            <div className="view-content">
                <h1>Sample Page</h1>
                <Hello name="Eric" />
                <button
                    className="button m-t-m"
                    onClick={this.goPage.bind(this)}
                >
                    Go to Contact Page
                </button>
            </div>
        );
    }
}

export default Sample;
