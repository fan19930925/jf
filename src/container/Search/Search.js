import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text:"sdafsd"
        }
    }

    unpdate = (e)=>{
        this.setState({text:e.target.value})

    }

    submit = () =>{
        console.log(this.state.text)
    }

    render() {
        
        return (
            <div style={{textAlign:"center !important"}} >
                    <InputGroup className="mb-3">
                        <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Mechanical"
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                        <input type="text" onChange={e =>this.unpdate(e)}/>
                        <Link to={"/Products/"+this.state.text}><Button onClick={() => this.submit()} >seasdarch</Button></Link>
                    </InputGroup>
                
            </div>
         
        )
    }
}

export default Search