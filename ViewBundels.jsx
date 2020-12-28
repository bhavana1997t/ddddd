import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


class ViewBundel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bundelData:[]
        }
    }
        componentDidMount(){
            this.setState({bundelData: JSON.parse(localStorage.getItem("bundel"))});
        }

        render(){
            return (
                <>
            
                    <Table striped bordered hover variant="light" className="m-0">
                        <thead>
                            <tr className="bg-dark text-light">
                                <th>bundel Id</th>
                                <th>bundel Name</th>
                                <th>bundel Description</th>

                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.bundelData.map((details) => (
                                <tr>
                                    <td>{details.bundelId}</td>
                                    <td>{details.bundelName}</td>
                                    <td>{details.bundelDescription}</td>
                                  
                                </tr>
                            ))
                        }
    
                        </tbody>
                    </Table>
                </>
            );
        }
    
}
export default ViewBundel;