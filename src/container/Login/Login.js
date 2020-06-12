import React, { Component } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Input from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { signin } from '../../store/actions';
import { textAlign } from '@material-ui/system';

const div1 = {
    backgroundImage: "linear-gradient(white, lightblue)",
    display:"inline !important",
    height:"100%",
    textAlign:"center"
  };




  const mapDispatchToProps = (dispatch) => {
      return{
        dispatch:isLogged => dispatch(signin()),
        dispatch:products => dispatch({type:"SET_PRODUCTS", group:products})

    }
  }


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: ''

        }
        this.handleChangeU = this.handleChangeU.bind(this);
        this.handleChangeP = this.handleChangeP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChangeU(event) {
      this.setState({username: event.target.value});
      
    }

    handleChangeP(event) {
      this.setState({password: event.target.value});
    }

    async handleSubmit(event) {
      console.log(this.state.username)
      event.preventDefault();
      const res= await axios.post(`http://localhost:8080/authenticate`, 
      { 
        "username": this.state.username,
        "password": this.state.password 
      });
      // .then(res => {

        localStorage.setItem('sessionToken', res.data.sessionToken);
        
      // })
       if(localStorage.getItem('sessionToken') != null){
        this.props.history.push("/Searchpage");
      }

    }


    componentDidMount(){
        axios.get(`http://localhost:8080/api/products`)
          .then(res => {
            const products = res.data;
            this.props.dispatch(products)

          })
      }



    render() {
        return (
            <div style={div1}>
                <div style={{marginRight:"5px"}}>
                <input style={{marginRight:"5px"}} type="submit" value="Sign Up"/>
                </div>
                
                <div>
                
                    <img src="joole.png" alt="Italian Trulli"></img>
                    <p>Building Product Selection Platform</p>
                    <div>
                      <form onSubmit={this.handleSubmit}>
                        <label>
                          Name:
                          <input type="text" placeholder="Username or Email" value={this.state.username} onChange={this.handleChangeU} />
                          <input type="text" placeholder="Password" value={this.state.password} onChange={this.handleChangeP} />
                        </label>
                        <input type="submit" value="Login" />
                      </form>
                    </div>
                </div>

          </div>
         
        )
    }
}

export default connect(mapDispatchToProps)(Login);