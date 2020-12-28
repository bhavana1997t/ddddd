import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, FormControl} from 'react-bootstrap';
import {  Nav } from 'react-bootstrap';
import axios from 'axios';
import UpdateProducts from './UpdateProducts.jsx';
import './product.css'
import AddProducts from './AddProducts';
import ProductDetails from'./ProductDetails.jsx';

function Products(){

  const[prod,setProd]=useState({});
  const[prods,setProds]=useState({});
  function submitHandler(event){
    event.preventDefault();
    let val = document.getElementById('d').value;
    const config = {
      headers: {
        "content-type": String,
      },
    };
     
    axios({
      method: 'GET',
      url: `http://localhost:8080/CustomizePlan/products/product/${val}`
  }).then(response => {
        // console.log(response);
        // let obj=JSON.stringify(response.data);
        // document.write(obj);
        localStorage.setItem("product",JSON.stringify(response.data.data));
        setProd(JSON.parse(localStorage.getItem("product")));
      }).catch((error) => {
        console.log(error);
      });
    
}

function submitHandle(event){
  event.preventDefault();
  let val = document.getElementById('dx').value;
  const config = {
    headers: {
      "content-type": String,
    },
  };
  axios({
    method: 'DELETE',
    url: `http://localhost:8080/CustomizePlan/products/${val}`
}).then(response => {
      console.log(response);
      
    })
    .catch((error) => {
      console.log(error);
    });
  
}


    return(
      <Router>
                 <div className="middle">
      <div className="text-center middle  bg-primary pb-2">
        <h1 className="text-light user"> Welcome to Customizer</h1>
      </div> 
      </div>  
      <Form inline>
      <FormControl type="text" placeholder="Search" id="d"  className="mr-sm-2" />
      <Button variant="outline-success" onClick={submitHandler}>Search</Button>
    </Form>
    <br></br>
    <Form inline>
      <FormControl type="text" placeholder="delete product by id" id="dx"  className="mr-sm-2" />
      <Button variant="outline-danger" onClick={submitHandle}>Delete</Button>
    </Form>

       <div>
      
    <h5><Nav.Link href="/products/AddProducts">click here to Add Products</Nav.Link></h5>
      <Route path="/products/AddProducts" component= {AddProducts} />
<h5><Nav.Link href="/products/UpdateProducts">click here to Update Products</Nav.Link></h5>
      <Route path="/products/UpdateProducts" component= {UpdateProducts} />
      <br></br><br></br>
</div>
<div><ProductDetails/></div>
</Router>   )
 } 
export default Products;