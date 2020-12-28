import React, { Component } from "react";
import User from "./investor.jpeg";
import "./investor.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Button } from 'react-bootstrap';
import Update from './UpdateInvestor';
import Companies from './ComoanyDetails';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [],
      proClick: false,
      updateClick:false,
      products: {},
    };
  }
  updateFunc=()=>{
    this.setState({proClick:false});
    this.setState({updateClick:!this.state.updateClick});
  }

  handleComp = () => 
  {
    this.setState({updateClick:false});
    this.setState({ proClick: !this.state.proClick });
    axios({
      method: "post",
      url: "http://localhost:8080/CustomizePlan/products",
      headers: { "Content-Type": "application/json" },
    }).then((resp) => {
      this.setState({ product: resp.data});
      console.log(this.state.data);
      
    }).catch(err=>console.log(err))
   
  };
  render() {
      return (
        <div className="top">
          <div className="text-center bg-success pb-4">
            <img src={User} className="responsive" alt="User" />
            <br />
            <hr />
>          </div>
          <div className="text-center btns pt-4 pb-4 bg-dark">
            <Button variant="success" className="mr-5" onClick={this.handleComp}>
              Products
            </Button>
           
            <Button variant="success" className="mr-5" onClick={this.updateFunc}>
              Update
            </Button>
            <Button variant="danger" className="mr-5" onClick={this.handleOut}>
              Logout
            </Button>
          </div>
      <div>{this.state.updateClick && <Update user={this.props.location.userData} />}</div>
          <div className="products">
            {this.state.proClick && <Companies user={this.props.location.userData} idata={this.state.investor} />}
          </div>
        </div>
      );
  }
}
export default withRouter(Products);