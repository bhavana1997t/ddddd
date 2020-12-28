import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodData: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/CustomizePlan/products"
        }).then((response) => {
            this.setState({ prodData: response.data.data });
        });
    }

  

    render() {
        return (
            <>
                <Table striped bordered hover variant="light" className="m-0">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th>product Id</th>
                            <th>product Name</th>
                            <th>product Description</th>
                            <th>company </th>
                            <th>plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.prodData.map((detail) => (
                                <tr>
                                    <td>{detail.productId}</td>
                                    <td>{detail.productName}</td>
                                    <td>{detail.productDescription}</td>
                                    <td>{detail.company.companyId}</td>
                                    <td><a href="/plan" ><button onClick={()=>{
                                        localStorage.setItem("plan",JSON.stringify(detail.plan));
                                    }}>view</button></a></td>
                                    <td className="text-center"></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </>
        );
    }
}
export default ProductDetails;