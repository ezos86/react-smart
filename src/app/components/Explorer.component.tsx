import * as React from 'react';
import Highlight from 'react-highlight.js';
import axios from 'axios';
import '../styles/components/explorer.scss';

interface IProps {
    source: string;
    title: string;
    url: string;
    method: string;
    body?: Array<any>;
    parameters?: Array<any>;
}

interface IState {
    response: string;
}

class Explorer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            response: ''
        };
    }

    formSubmit(event: any) {
        event.preventDefault();
        let url: any = this.props.url;
        let method: any = this.props.method || 'GET';
        let axios_config: any = {
            url,
            method
        };
        // Formulate Parameters
        if (this.props.parameters) {
            for (let i = 0; i < this.props.parameters.length; i++) {
                url = url.replace(
                    '{' + this.props.parameters[i].key + '}',
                    event.target.elements[this.props.parameters[i].key].value
                );
            }
            axios_config.url = url;
        }
        // Formulate Body from inputs
        if (this.props.body) {
            axios_config.data = {};
            for (let i = 0; i < this.props.body.length; i++) {
                axios_config.data[this.props.body[i].name] =
                    event.target.elements[this.props.body[i].name].value;
            }
        }

        axios(axios_config)
            .then((resp: any) => {
                this.setState({ response: JSON.stringify(resp.data, null, 4) });
            })
            .catch((resp: any) => {
                this.setState({ response: JSON.stringify(resp, null, 4) });
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit.bind(this)}>
                    <h3 className="m-b-s">{this.props.title || 'No Title'}</h3>
                    <h3 className="explorer-method m-b-s">
                        {this.props.method}
                    </h3>
                    <h3 className="explorer-base m-b-s">Base URL</h3>
                    <p className="explorer-url">
                        <strong>{this.props.url}</strong>
                    </p>
                    {this.props.parameters ? (
                        <div className="explorer-parameters m-t-m">
                            <h3 className="explorer-base m-b-s">
                                URL Parameters
                            </h3>
                            {/* Create Fields for Body */
                            this.props.parameters.map((obj, index) => {
                                return (
                                    <div key={index} className="field">
                                        <div className="field">
                                            <div className="control">
                                                <label
                                                    className="input-label"
                                                    htmlFor={obj.name}
                                                >
                                                    {obj.name.replace(
                                                        /^\w/,
                                                        (c: string) =>
                                                            c.toUpperCase()
                                                    )}
                                                </label>
                                                <input
                                                    className="input"
                                                    type="text"
                                                    placeholder={
                                                        obj.placeholder
                                                    }
                                                    name={obj.key}
                                                    max={obj.max}
                                                    min={obj.max}
                                                    required={obj.required}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : null}
                    {this.props.body ? (
                        <div className="explorer-body m-t-m">
                            <h3 className="explorer-base m-b-s">Body</h3>
                            {/* Create Fields for Body */
                            this.props.body.map((obj, index) => {
                                return (
                                    <div key={index} className="field">
                                        <div className="field">
                                            <div className="control">
                                                <label
                                                    className="input-label"
                                                    htmlFor={obj.name}
                                                >
                                                    {obj.name.replace(
                                                        /^\w/,
                                                        (c: string) =>
                                                            c.toUpperCase()
                                                    )}
                                                </label>
                                                <input
                                                    className="input"
                                                    type={obj.type}
                                                    placeholder={
                                                        obj.placeholder
                                                    }
                                                    name={obj.name}
                                                    max={obj.max}
                                                    min={obj.max}
                                                    required={obj.required}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : null}
                    <button className="button is-info m-t-m" type="submit">
                        Send Request
                    </button>
                    <div className="response m-t-m">
                        <h3>Response:</h3>
                        <Highlight language="JSON">
                            {this.state.response}
                        </Highlight>
                    </div>
                </form>
            </div>
        );
    }
}

export { Explorer };

/*

if (this.props.method == 'POST' || this.props.method == 'PUT') {
                    
}

Links: 
 4 Methods

 Add Car
 Get Car List
 Update Car
 Remove Car

List of Cars


*/
