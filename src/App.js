import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './container/Login/Login';
import Search from './container/Search/Search';
import { Route, Switch } from "react-router-dom";
import Navbar from './container/Navbar/Navbar';
import Cardpage from './container/Cardpage/Cardpage';
import Sidebar from './container/Sidebar/Sidebar';
import Products from './container/Products/Products';
import Detail from './container/Detail/Detail';
import Searchpage from './container/Searchpage/Searchpage';
import { connect } from 'react-redux';
import Compare from './Compare/Compare';

const mapStateToProps = function(state) {
  return {
    logged : state.Logged
  }
}


class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
      }
  } 

  render(){
    return (
      <div style={{height:"100%"}}>
      {this.props.logged?
      // console.log(this.props.logged)    
        <div style={{height:"100%"}}>
          <Switch>
             <Route path="/" exact component={Login} />
            <Route path="/Navbar" exact component={Navbar} />
            <Route path="/Cardpage" exact component={Cardpage} />
            <Route path="/Sidebar" exact component={Sidebar} />
            <Route path="/Products/:text" exact component={Products} />
            <Route path="/Detail/:product_id" exact component={Detail} />
            <Route path="/Searchpage" exact component={Searchpage} />
            <Route path="/Compare" exact component={Compare} />
          </Switch>
          {console.log(this.props.logged)}
      </div>:
      <div>
        <Route path="/" exact component={Login} />
      </div>
  
      }
      </div>
      
    )

  }
  
}

export default connect(mapStateToProps)(App);
