import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Landing from './component/Landing/Landing'
import Login from './component/Login/Login'
import './index.css'
import reportWebVitals from './reportWebVitals'

document.title = "Redbee Studios"

ReactDOM.render(
  <Router>
    <Switch>
      <Redirect from='//' to="/login/" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/landing" component={Landing} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()