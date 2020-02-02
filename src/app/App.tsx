declare let module: any;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Pages
import Home from './views/Home.view';
import Sample from './views/Sample.view';
import Contact from './views/Contact.view';
import NoPage from './views/NoPage.view';
import './styles/base.scss';

const app = (
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
);

ReactDOM.render(app, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}