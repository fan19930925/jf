import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const mapStateToProps = function(state) {
    return {
      products: state.Products,
      filter: state.Filter,
    };
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setCompare : (p) => {dispatch({type:'COMPARE', product:p})}
    }

}

const div1 = {
    backgroundColor:"lightgrey"
  };

class Cardpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    handleAdd = (id) => {
        this.props.setCompare(id);
    }
    
    render() {
        return (
            <div style={{display:"flex"}}>

                {this.props.filter.map(product=>(
                    <Card style={{ width: '18rem' }} key={product.product_id}>
                    <Link to={"/Detail/"+product.product_id}>
                        <Image variant="top" src={process.env.PUBLIC_URL + "/fengshan" + product.product_id + ".png"} />
                    
                    </Link>
                    
                    <Card.Body>
                        <Card.Title>
                            <div style={{display:"inline"}}>
                                <div>{product.manufacturer}</div>
                                <div>{product.series}</div>
                                <div>{product.model}</div>
                            </div>
                        </Card.Title>
                        <Card.Text style={div1}>
                            <div style={{display:"inline"}}>
                                <div>{product.airflow}CFM</div>
                                <div>{product.power_max}W at max speed</div>
                                <div>{product.sound}dBA at max speed</div>
                                <div>{product.diameter}fan sweep diameter</div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <div style={{color:"red"}}>
                                past specification
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <input type="checkbox" name="vehicle1" value="Bike" onChange={()=>this.handleAdd(product.product_id)} /> Compare
                        <Link to="/Compare">
                        <input type="submit" value="Add to"   />
                        </Link>
                    </Card.Body>
                </Card>



                ))}

               
            </div>
         
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cardpage);