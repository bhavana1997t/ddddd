import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./product.css";

function AddProduct() {

    function submitHandler(event){
        event.preventDefault();
        let object = {
            
            productName:document.getElementById('pname').value,
            productDescription:document.getElementById('pdesc').value,
            company:{
                companyId:document.getElementById('cid').value
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
          .post("http://localhost:8080/CustomizePlan/products", json, config)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
          let ele=document.getElementById('co');
          ele.innerHTML="product Added Successfully";
          ele.style.textAlign="center";
          ele.style.marginBottom="30px"
    }
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 coform mb-5" id="co">
      <form name="myForm" onSubmit={submitHandler}>
        <h3 className="mb-5 text-muted text-center mt-5">Add Products</h3>

        <div className="form-group">
          <label>product Name</label>
          <input
            type="text"
            id="pname"
            className="form-control"
            name="companyName"
            placeholder="Enter product Name"
          />
        </div>

        <div className="form-group">
          <label>product Description</label>
          <input
            type="text"
            id="pdesc"
            name="productdescription"
            className="form-control"
            placeholder="Enter product description"
          />
        </div>

        <div className="form-group">
          <label>Company Id</label>
          <textarea
            type="textarea"
            id="cid"
            name="companyId"
            className="form-control"
            placeholder="Enter CompanyId"
          />
        </div>

      
        <div>
          <button className="btn btn-primary mt-4 subtn" type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}
export default AddProduct;