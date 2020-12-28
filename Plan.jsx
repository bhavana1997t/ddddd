import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, FormControl} from 'react-bootstrap';
import {  Nav } from 'react-bootstrap';
import UpdatePlans from './UpdatePlan.jsx';
import './plan.css'
import axios from 'axios';
import PlanDetails from './PlanDetails';
import AddPlans from './AddPlan';
function Plans(){
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
      url: `http://localhost:8080/CustomizePlan/plans/plan/${val}`
  }).then(response => {
        console.log(response);
        let obj=JSON.stringify(response.data);
        document.write(obj);
      })
      .catch((error) => {
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
    url: `http://localhost:8080/CustomizePlan/plans/${val}`
}).then(response => {
      console.log(response);
      let obj=JSON.stringify(response.data);
      document.write(obj);
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
      <FormControl type="text" placeholder="Search" id="d" className="mr-sm-2" />
      <Button variant="outline-success" onClick={submitHandler}>Search</Button>
    </Form> 
    <br></br>
    <Form inline>
      <FormControl type="text" placeholder="Delete plan by id" id="dx" className="mr-sm-2" />
      <Button variant="outline-danger" onClick={submitHandle}>Delete</Button>
    </Form> 
       <div>
    <h5><Nav.Link href="/Plans/AddPlans">click here to Add Plans</Nav.Link></h5>
      <Route path="/Plans/AddPlans" component= {AddPlans} />
<h5><Nav.Link href="/Plans/UpdatePlans">click here to Update Plans</Nav.Link></h5>
      <Route path="/Plans/UpdatePlans" component= {UpdatePlans} />
      <br></br><br></br>
</div>
<div><PlanDetails/></div>
</Router>   )
            }
export default Plans;