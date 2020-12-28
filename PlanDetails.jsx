import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


class PlanDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planData: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/CustomizePlan/plans"
        }).then((response) => {
            console.log(response.data);
            this.setState({ planData: response.data.data });
        });
    }
    render() {
        return (
            <>
                <Table striped bordered hover variant="light" className="m-0">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th>plan Id</th>
                            <th>plan Name</th>
                            <th>plan Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.planData.map((detail) =>(
                                <tr>
                                    <td>{detail.planId}</td>
                                    <td>{detail.planName}</td>
                                    <td>{detail.planDescription}</td>
                                    {/* <td><a href="/bundelsplans"><button onClick={()=>{
                                         localStorage.setItem("bundel",JSON.stringify(detail.bundel));
                                    }
                                    }>view</button></a></td> */}
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </>
        );
    }
}
export default PlanDetails;