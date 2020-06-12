import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Search from '../Search/Search';

const img2 = {
    height: "50px",
    marginLeft:"1%",
    borderRadius:"100%"
  };

  const img1 = {
    height: "50px",
    marginLeft:"10%",
    marginRight:"20%"
  };
  const p1 = {
    marginLeft:"25%"

  };
  const div1 = {
    backgroundImage: "linear-gradient(to right,white, lightblue)",
    display:"flex"
  };

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div style={div1}>   
                <img src={process.env.PUBLIC_URL + "/joole.png"} alt="Italian Trulli" style={img1}></img>
                <Search/>
                <p style={p1}>Projects</p>
                <img src={process.env.PUBLIC_URL + "/NB.jpg"} alt="Italian Trulli" style={img2}></img>
            </div>
         
        )
    }
}

export default Navbar