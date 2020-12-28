import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, FormControl, Jumbotron } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import UpdateCompany from './UpdateCompany';
import './company.css'
import AddCompany from './AddCompany';
import CompanyDetails from './CompanyDetails'
import axios from 'axios';
function Company() {

  function submitHandler(event) {
    event.preventDefault();
    let val = document.getElementById('d').value;
    const config = {
      headers: {
        "content-type": String,
      },
    };
    axios({
      method: 'GET',
      url: `http://localhost:8080/CustomizePlan/company/companies/${val}`
    }).then(response => {
      console.log(response);
      let obj = JSON.stringify(response.data);
      document.write(obj);
    }).catch((error) => {
      console.log(error);
    });

  }

  function submitHandle(event) {
    event.preventDefault();
    let val = document.getElementById('dx').value;
    const config = {
      headers: {
        "content-type": String,
      },
    };
    axios({
      method: 'DELETE',
      url: `http://localhost:8080/CustomizePlan/company/${val}`
    }).then(response => {
      console.log(response);
      let obj = response.data[0];
      <div><pre>{JSON.stringify(obj)}</pre></div>
    })
      .catch((error) => {
        console.log(error);
      });

  }
  return (
    <Router>
      <div className="middle">
        <div className="text-center middle  bg-primary pb-2">
          <h1 className="text-light user"> Welcome to Customizer</h1>
        </div>
      </div>
      <Form inline>
        <FormControl type="text" placeholder="Search" id="d" className="mr-sm-2" />
        <Button variant="outline-success" onClick={submitHandler}>Search</Button>
      </Form>
      <br></br>
      <Form inline>
        <FormControl type="text" placeholder="delete company by id" id="dx" className="mr-sm-2" />
        <Button variant="outline-danger" onClick={submitHandle}>Delete</Button>
      </Form>
      <div>
        <h5><Nav.Link href="/company/AddCompany">click here to Add Company</Nav.Link></h5>
        <Route path="/company/AddCompany" component={AddCompany} />
        <h5><Nav.Link href="/company/UpdateCompany">click here to Update Company</Nav.Link></h5>
        <Route path="/company/UpdateCompany" component={UpdateCompany} />
        <br></br><br></br>
       

      </div>
      <div><CompanyDetails /></div>
    </Router>

  )
}
export default Company;