import React, { Component } from 'react';
import Navbar from '../container/Navbar/Navbar';
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
      compare: state.Compare
    };
}

class Compare extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
      
        }
    }

    render(){
        return(
            <div style={{display:"inline"}}>
                <Navbar/>
                <div>Mechanical>HVAC Fans</div>
                <div style={{display:"flex"}}>
                    <div style={{display:"inline", marginTop:"11%"}}>
                        <div>DESCRIPTION</div>
                        <div style={{display:"inline"}}>
                            <div style={{backgroundColor:"lightgrey"}}>Manufacturer</div>
                            <div style={{backgroundColor:"lightgrey"}}>Series</div>
                            <div style={{backgroundColor:"lightgrey"}}>Model</div>    
                        </div>
                        <div>TYPE</div>
                        <div style={{display:"inline"}}>
                            <div style={{backgroundColor:"lightgrey"}}>Use Type</div>
                            <div style={{backgroundColor:"lightgrey"}}>Application</div>
                            <div style={{backgroundColor:"lightgrey"}}>Mounting Location</div>
                            <div style={{backgroundColor:"lightgrey"}}>Accseeories</div>
                            <div style={{backgroundColor:"lightgrey"}}>Model Year</div>
                        </div>
                        <div>TECHNICAL SPECIFICATIONS</div>
                        <div style={{display:"inline"}}>
                            <div style={{backgroundColor:"lightgrey"}}>Airflow(CFM)</div>
                            <div style={{backgroundColor:"lightgrey"}}>Power(W)</div>
                            <div style={{backgroundColor:"lightgrey"}}>Operating Voltage(VAC)</div>
                            <div style={{backgroundColor:"lightgrey"}}>Fan Speed(RPM)</div>
                        </div>
                    </div>
                    


                    {this.props.products.map(product=>(
                        <div key={product.product_id}>{this.props.compare.group[product.product_id-1]?
                        <div style={{display:"inline"}} >
                        <div style={{display:"inline"}}>
                            <div style={{display:"inline"}}>
                                button  verified 08/21/2016
                            </div>
                            <div>
                            <Image variant="top" src={process.env.PUBLIC_URL + "/fengshan" + product.product_id + ".png"} />
                            </div>
                        </div>
                        <div style={{height:"4%"}}></div>
                        <div style={{display:"inline"}}>
                            <div>{product.manufacturer}</div>
                            <div>{product.series}</div>
                            <div>{product.model}</div>
                        </div>
                        <div style={{height:"4%"}}></div>
                        <div style={{display:"inline"}}>
                            <div>{product.use_type} </div>
                            <div>{product.application} </div>
                            <div>{product.location} </div>
                            <div>{product.accessories}</div>
                            <div>{product.model_year}</div>
                        </div>
                        <div style={{height:"4%"}}></div>
                        <div style={{display:"inline"}}>
                            <div>{product.airflow}</div>
                            <div style={{display:"flex"}}>
                                <div style={{backgroundColor:"lightgrey"}}>Min</div>
                                <div>{product.power_min} </div>
                                <div style={{backgroundColor:"lightgrey"}}>Max</div>
                                <div>{product.power_max}</div>
                            </div>
                            <div style={{display:"flex"}}>
                                <div style={{backgroundColor:"lightgrey"}}>Min</div>
                                <div>{product.voltage_min} </div>
                                <div style={{backgroundColor:"lightgrey"}}>Max</div>
                                <div>{product.voltage_max}</div>
                            </div>
                            <div style={{display:"flex"}}>
                                <div style={{backgroundColor:"lightgrey"}}>Min</div>
                                <div>{product.fanspeed_min} </div>
                                <div style={{backgroundColor:"lightgrey"}}>Max</div>
                                <div>{product.fanspeed_max}</div>
                            </div>
                        </div>
                    </div>

                        :
                        <div></div>
                        }

                        

                    </div>
                    ))}
                    
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Compare);