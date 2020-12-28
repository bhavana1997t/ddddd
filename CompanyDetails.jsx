import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


class CompanyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compData: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/CustomizePlan/company"
        }).then((response) => {
            this.setState({ compData: response.data.data });
        });
    }
    render() {
        return (
            <>
                <Table striped bordered hover variant="light" className="m-0">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th>Company Id</th>
                            <th>Company Name</th>
                            <th>Company Phone</th>
                            <th>Company Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.compData.map((detail) =>(
                                <tr>
                                <td>{detail.companyId}</td>
                                    <td>{detail.companyName}</td>
                                    <td>{detail.companyPhone}</td>
                                    <td>{detail.companyAddress}</td>
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
export default CompanyDetails;