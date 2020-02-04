import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// Pages
import Home from './views/Home.view';
import Sample from './views/Sample.view';
import Contact from './views/Contact.view';
import NoPage from './views/NoPage.view';
// Styles
import './styles/base.scss';

//Store
import rootReducer from './reducers/index';
const logger = (store: any) => (next: any) => (action: any) => {
    console.log(action);
    console.log(store.getState());
    next(action);
};
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
store.subscribe(() => {
    console.log('Store changed', store.getState());
});

const app = (
    <Provider store={store}>
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/sample" component={Sample} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NoPage} />
                </Switch>
            </Router>
            <ToastContainer />
        </div>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

declare let module: any;
if (module.hot) {
    module.hot.accept();
}
