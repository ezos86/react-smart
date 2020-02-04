import * as React from 'react';
import Hello from '../components/Hello.component';
import HelloRedux from '../components/HelloRedux.component';
import List from '../components/List.component';
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
            <div className="sample-page">
                <h1 className="m-b-m m-t-m">Sample Page</h1>
                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <h3>List Component</h3>
                            <List />
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <h3>Local Counter</h3>
                            <Hello name="Eric" />
                        </div>                        
                    </div>
                    <div className="column">
                        <div className="box">
                            <h3>Redux Counter</h3>
                            <HelloRedux name="Eric" />
                        </div>
                    </div>
                </div>
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
