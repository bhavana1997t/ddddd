import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./plan.css";


function UpdatePlan() {

    function submitHandler(event){
        event.preventDefault();
        let object = {
            planId: document.getElementById('planid').value,
            planName:document.getElementById('pname').value,
            planDescription:document.getElementById('pdesc').value,
            startDate:document.getElementById('pdate').value,
            product:{
                productId:document.getElementById('pid').value
            },
            bundel:{
              bundelId: document.getElementById('bid').value
            }   
        };
        let json = JSON.stringify(object);
        console.log(json);
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        axios
          .put("http://localhost:8080/CustomizePlan/plans", json, config)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
          let ele=document.getElementById('co');
          ele.innerHTML="plan Added Successfully";
          ele.style.textAlign="center";
          ele.style.marginBottom="30px"
    }
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 coform mb-5" id="co">
      <form name="myForm" onSubmit={submitHandler}>
        <h3 className="mb-5 text-muted text-center mt-5">Update Plan</h3>

        <div className="form-group">
          <label>plan Id</label>
          <textarea
            type="textarea"
            id="planid"
            name="planid"
            className="form-control"
            placeholder="Enter plan id"
          />
        </div>
        <div className="form-group">
          <label>plan Name</label>
          <input
            type="text"
            id="pname"
            className="form-control"
            name="companyName"
            placeholder="Enter plan Name"
          />
        </div>

        <div className="form-group">
          <label>plan Description</label>
          <input
            type="text"
            id="pdesc"
            name="productdescription"
            className="form-control"
            placeholder="Enter plan description"
          />
        </div>

        <div className="form-group">
          <label>start Date</label>
          <input
            type="text"
            id="pdate"
            className="form-control"
            name="startDate"
            placeholder="Enter start date of plan yyyy-mm-dd"
          />
        </div>

        <div className="form-group">
          <label>product Id</label>
          <textarea
            type="textarea"
            id="pid"
            name="productId"
            className="form-control"
            placeholder="Enter product id"
          />
        </div>

        <div className="form-group">
          <label>Bundel Id</label>
          <textarea
            type="textarea"
            id="bid"
            name="bundelId"
            className="form-control"
            placeholder="Enter bundel id"
          />
        </div>

      
        <div>
          <button className="btn btn-primary mt-4 subtn" type="submit">Update Plan</button>
        </div>
      </form>
    </div>
  );
}
export default UpdatePlan;