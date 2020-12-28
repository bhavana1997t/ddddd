import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./company.css";

function AddCompany() {

    function submitHandler(event){
        event.preventDefault();
        let object = {
            
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
          .post(" http://localhost:8080/CustomizePlan/company", json, config)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
          let ele=document.getElementById('co');
          ele.innerHTML="Company Added Successfully";
          ele.style.textAlign="center";
          ele.style.marginBottom="30px"
    }
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 coform mb-5" id="co">
      <form name="myForm" onSubmit={submitHandler}>
        <h3 className="mb-5 text-muted text-center mt-5">Add Company</h3>

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
            placeholder="Enter Contact Number"
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
          <button className="btn btn-primary mt-4 subtn" type="submit">Add Company</button>
        </div>
      </form>
    </div>
  );
}
export default AddCompany;