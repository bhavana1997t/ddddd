import React, { Component } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./company.css";
import { useEffect } from "react";

function UpdateCompany() {

    function submitHandler(event){
        event.preventDefault();
        let object = {
          companyId:document.getElementById('cids').value,
            companyName:document.getElementById('cname').value,
            companyPhone:document.getElementById('cph').value,
              companyAddress:document.getElementById('cadd').value
            
        };
        let json = JSON.stringify(object);
        console.log(json);
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        axios
          .put(" http://localhost:8080/CustomizePlan/company", json, config)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
          let ele=document.getElementById('co');
          ele.innerHTML="Updation Successfull";
          ele.style.textAlign="center";
          ele.style.marginBottom="30px"
    }
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 coform mb-5" id="co">
      <form name="myForm" onSubmit={submitHandler}>
        <h3 className="mb-5 text-muted text-center mt-5">Update Company</h3>


        <div className="form-group">

        <label>Company Id</label>
          <input
            type="number"
            id="cids"
            className="form-control"
            name="companyId"
            placeholder="Enter Company Id"
          />
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            id="cname"
            className="form-control"
            name="companyName"
            placeholder="Enter Company Name"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="number"
            id="cph"
            name="companyPhone"
            className="form-control"
            placeholder="Enter phone Number"
          />
        </div>

        <div className="form-group">
          <label>Company Address</label>
          <textarea
            type="textarea"
            id="cadd"
            name="companyAddress"
            className="form-control"
            placeholder="Enter Company Address"
          />
        </div>

        <div>
          <button className="btn btn-primary mt-4 subtn" type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
export default UpdateCompany;