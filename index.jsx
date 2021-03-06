import React, {Component} from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import browserHistory from 'react-router/lib/browserHistory'

// import css from './style.less';

import Homepage from './components/Homepage.jsx';
// import NotFound from './components/NotFound.jsx';


class MainLayout extends Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}


const routes = {
    path: '/',
    component: MainLayout,
    indexRoute: { component: Homepage },
    childRoutes: [
    //     { path: 'about', component: About },
    //     { path: '*', component: NotFound },
    ]
}

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('react-target')
);
