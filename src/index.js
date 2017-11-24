import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './muiTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import createRavenMiddleware from "raven-for-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './pages/index';
import reducers from './reducers';
import './index.css';

injectTapEventPlugin();

const middleware = routerMiddleware(browserHistory);
const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware),
  applyMiddleware(
    createRavenMiddleware(window.Raven, {
      breadcrumbDataFromAction: action => {
        return { STRING: action.str };
      }
    })
  )
);
const history = syncHistoryWithStore(browserHistory, store);

history.listen(function (location) {
  window.ga('send', 'pageview', location.pathname);
});

const MUI = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <Provider store={store}>
      <Router history={history}>
        <Route path='*' component={App}/>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<MUI />, document.getElementById('root'));