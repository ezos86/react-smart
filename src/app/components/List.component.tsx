import * as React from 'react';
import counter from '../actions/counter.actions';
import { connect } from 'react-redux';

type Props = {
    name: string;
    dispatch: () => void;
    sample: any;
};
type State = {
    items: Array<any>;
};

class List extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: [
                {
                    item: 'Cheese',
                    price: 100
                },
                {
                    item: 'Chips',
                    price: 1100
                },
                {
                    item: 'Bacon',
                    price: 200
                }
            ]
        };
        this.addItem.bind(this);
        this.removeItem.bind(this);
    }

    addItem(event: any) {
        this.state.items.push({ item: 'Food', price: 100});
        this.setState({items: this.state.items});
    }

    removeItem(event: any, idx: any) {
        this.state.items.splice(idx, 1);
        this.setState({items: this.state.items});
    }

    render() {
        return (
            <div>
                <ul className="item-list">
                {
                    this.state.items.map((obj, idx) => {
                        return (
                            <li key={idx}>{obj.item} - ${(obj.price/100).toFixed(2)}</li>
                        );
                    })
                }
                </ul>
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

export default connect(mapState, mapDispatch)(List);
