import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Search from '../Search/Search';
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
import { textAlign } from '@material-ui/system';

const div1 = {
    backgroundImage: "linear-gradient(white, lightblue)",
    height:"90%",
    textAlign:"center !important"
  };
const div2 = {
    marginLeft:"35%",
    marginRight:"20%"
}
const p1 = {
    marginLeft:"85%"
};

const img1 = {
    height:"50px"
};

class Searchpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

   

    
    render() {
        return (
            <div style={{backgroundImage: "linear-gradient(white, lightblue)", height:"90%", textAlign:"center"}}>
                <div style={{display:"flex"}}>

                        <Link to='/'>
                            <input type="submit" value="Logout" onClick="localStorage.removeItem('sessionToken')"/>
                        </Link>     
                
                    <p style={p1}>projects</p>
                    <img style={img1} src="joole.png"></img>
                    
                </div>
                <img src="joole.png"></img>
                <p>Building Product Selection Platform</p>
                <div style={div2}>   
                    <Search />
                </div>
            </div>
         
        )
    }
}

export default Searchpage