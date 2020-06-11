import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login/Login'

const root = (

    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login}/>
        <Redirect from="/" to  ="/Login"/>
      </Switch>
    </BrowserRouter>

);

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
