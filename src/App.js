import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from './pages/home/home.jsx';
import Login from "./pages/user/login.jsx";
import Main from "./pages/main/main.jsx";
import Newperson from "./pages/newperson/newperson.jsx";
import Pay from "./pages/pay/pay.jsx";

class App extends Component {

  render() {
    return (
	    <Switch>
		    <Route path="/login" component={Login}></Route>
			<Route path="/main" component={Main}></Route>
			<Route path="/newperson" component={Newperson}></Route>
			<Route path="/pay" component={Pay}></Route>			
			<Route path="*" component={Home}></Route>
		</Switch>
    );
  }
}

export default App;
