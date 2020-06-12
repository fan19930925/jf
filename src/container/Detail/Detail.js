import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Cardpage from '../Cardpage/Cardpage';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import Image from 'react-bootstrap/Image';

const mapStateToProps = function(state) {
    return {
      products:state.Products
    };
  };

const img1 = {
    height: "50px",
    marginLeft:"10%",
    marginRight:"20%"
  };




class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product:{}   
        }
    }

    componentDidMount(){
        this.setState({product:this.props.products[this.props.match.params.product_id - 1]})
      }
    
    render() {
        return (
            <div style={{display:"inline"}}>
                <div><Navbar/></div>
                <div>
                    Mechanical > HVAC Fans > S3150-S0-BC-04-01-C-01
                </div>
                <div style={{display:"flex"}}>
                    <div style={{display:"flex"}}>
                        <div><img src={process.env.PUBLIC_URL + "/fengshan" + this.state.product.product_id + ".png" }  style={img1}/></div>
                        <div><a href={"https://www.runoob.com/"}>Big Ass / Haiku H Series / S3150-S0-BC-04-01-C-01 Past specifications: 0 firm / 1,297 global</a></div>
                        <div></div>
                        <div></div>
                    </div>
                    

                    
                    <input type="submit" value="Add To"/>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{backgroundColor:"lightgrey"}}>Product Summary</div>
                    <div style={{backgroundColor:"lightgrey"}}>Product Details</div>
                    <div style={{backgroundColor:"lightgrey"}}>Product Documentation</div>
                    <div style={{backgroundColor:"lightgrey"}}>Contact</div>
                </div>
                <div>Product Summary</div>
                <div style={{display:"flex"}}>
                    <div style={{display:"inline"}}>
                        <div>DESCRIPTION</div>
                        <div style={{display:"flex"}}>
                            <div style={{display:"inline"}}>
                                <div style={{backgroundColor:"lightgrey"}}>Manufacturer</div>
                                <div style={{backgroundColor:"lightgrey"}}>Series</div>
                                <div style={{backgroundColor:"lightgrey"}}>Model</div>
                            </div>
                            <div style={{display:"inline"}}>
                                <div>{this.state.product.manufacturer}</div>
                                <div>Haiku H</div>
                                <div>S3150-S0-BC-04-01-C-01</div>
                            </div>
                        </div>
                        <div>TYPE</div>
                        <div style={{display:"flex"}}>
                            <div style={{display:"inline"}}>
                                <div style={{backgroundColor:"lightgrey"}}>Use Type</div>
                                <div style={{backgroundColor:"lightgrey"}}> Application</div>
                                <div style={{backgroundColor:"lightgrey"}}>Mounting Location</div>
                                <div style={{backgroundColor:"lightgrey"}}>Accessories</div>
                                <div style={{backgroundColor:"lightgrey"}}>Model Year</div>
                            </div>
                            <div style={{display:"inline"}}>
                                <div>{this.state.product.use_type}</div>
                                <div>{this.state.product.application}</div>
                                <div>{this.state.product.location}</div>
                                <div>{this.state.product.accessories}</div>
                                <div>{this.state.product.model_year}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"inline"}}>
                        <div>TECHNICAL SPECIFICATIONS</div>
                        <div style={{display:"flex"}}>
                            <div style={{display:"inline"}}>
                                <div style={{backgroundColor:"lightgrey"}}>Airflow(CFM)</div>
                                <div style={{backgroundColor:"lightgrey"}}>Power(W)</div>
                                <div style={{backgroundColor:"lightgrey"}}>Operating Voltage(VAC)</div>
                                <div style={{backgroundColor:"lightgrey"}}>Fan Speed(RPM)</div>
                                <div style={{backgroundColor:"lightgrey"}}>Number Of Fan Speeds</div>
                                <div style={{backgroundColor:"lightgrey"}}>Sound at Max Speed(dBA)</div>
                                <div style={{backgroundColor:"lightgrey"}}>Fan Sweep Diameter(in)</div>
                                <div style={{backgroundColor:"lightgrey"}}>Height(in)</div>
                                <div style={{backgroundColor:"lightgrey"}}>Weight(lbs)</div>
                            </div>
                            <div style={{display:"inline"}}>
                                <div>{this.state.product.airflow}</div>
                                <div style={{display:"flex"}}>
                                    <div style={{backgroundColor:"lightgrey"}}>Min</div>
                                    <div>{this.state.product.power_min}</div>
                                    <div style={{backgroundColor:"lightgrey"}}>Max</div>
                                    <div>{this.state.product.power_max}</div>
                                </div>
                                <div style={{display:"flex"}}>
                                    <div style={{backgroundColor:"lightgrey"}}>Min</div>
                                    <div>{this.state.product.voltage_min}</div>
                                    <div style={{backgroundColor:"lightgrey"}}>Max</div>
                                    <div>{this.state.product.voltage_max}</div>
                                </div>
                                <div style={{display:"flex"}}>
                                    <div style={{backgroundColor:"lightgrey"}}>Min</div>
                                    <div>{this.state.product.fanspeed_min}</div>
                                    <div style={{backgroundColor:"lightgrey"}}>Max</div>
                                    <div>{this.state.product.fanspeed_max}</div>
                                </div>
                                <div>{this.state.product.speed_number}</div>
                                <div>{this.state.product.sound}</div>
                                <div>{this.state.product.diameter}</div>
                                <div style={{display:"flex"}}>
                                    <div style={{backgroundColor:"lightgrey"}}>Min</div>
                                    <div>{this.state.product.height_min}</div>
                                    <div style={{backgroundColor:"lightgrey"}}>Max</div>
                                    <div>{this.state.product.height_max}</div>
                                </div>
                                <div>{this.state.product.weight}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>Product Details</div>
                <div style={{display:"inline"}}>
                    <div>SERIES INFORMATION</div>
                    <div>Airfoils-Moso bamboo-60"diameter</div>
                    <div>Airfoil Finishes-Caramel Bamboo or Vocoa Bamboo</div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Detail)