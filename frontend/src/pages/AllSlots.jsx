import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Logo from "../components/Logo";
import AdminSideBar from "../components/AdminSideBar";

const AllSlots = () => {
  const Swal = require("sweetalert2");
  const [slots, setSlots] = useState([]);
  const [applicant, setApplicant] = useState([]);
  const [slotid, setSlotId] = useState("")


  const [reducerValue, forceUpdate] = useReducer((x)=> x + 1, 0)

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/adminside/approved")
      .then((response) => setApplicant(response.data));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/adminside/slotbooking")
  //     .then((response) => setSlots(response.data));
  // },[]);

console.log(slots)

console.log(applicant,"applicantttt")


// const AssignSlot=(slotid,userid)=>{
// console.log(slotid,'slottttttttttttttttttttttttttt')
//   axios
//       .post("http://127.0.0.1:8000/adminside/bookslot",{slotid:slotid,applicantid:userid}).then((response)=>{
        
//       })

// }
const AssignSlot=(userid)=>{
console.log(slotid,'slottttttttttttttttttttttttttt')
console.log(userid ,'userrrrrrr')
  axios
      .post("http://127.0.0.1:8000/adminside/bookslot",{slotid:slotid,applicantid:userid})
      .then((response)=>{
        console.log("responsee", response.data);
      })
      forceUpdate()

}

console.log('SETID', slotid);
  const loadSlot=async()=>{
    await axios
    .get("http://127.0.0.1:8000/adminside/slotbooking")
    .then((response) => setSlots(response.data));

  }


useEffect(()=>{

  loadSlot()
},[reducerValue])



const createSlot = (e) => {
  axios
      .post("http://127.0.0.1:8000/adminside/slotbooking", {
          
      })
      .then(function (response) {
          // navigate("/slots")
          
      });
      forceUpdate()
      
};

  return (
    <>
      <Logo />
      <Header />
      <AdminSideBar />
      <div>
        <div className="row pt-5 ps-5">
          <div className="row pt-5 ">
          <div className="col-lg-2"></div>
          <div className="col-lg-10 pt-5">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Slots</h4>
                <button onClick={()=>createSlot()} type="button" class="btn btn-rounded btn-success"><span
                                        class="btn-icon-start text-dark"><i class="fa fa-plus color-black"></i>
                                    </span>Add</button>
              </div>
              <div className="card-body pb-1">
                <div id="lightgallery" className="row">

                {slots.map((data, id) => {

                  return(
                    <>
                    <div className="col-xl-3 col-xxl-3 col-sm-6">
                    <div className="card overflow-hidden">
                      <div className={`social-graph-wrapper ${data.available===true ? `widget-linkedin` : `widget-googleplus`} `}>
                        <span className="s-icon "> 
                        {data.available===true ?                
                          <i data-bs-toggle="modal" onClick={()=>setSlotId(data.id)} data-bs-target="#exampleModalCenter" className= "mt-5 pt-5 fab">AVAILABLE</i> :
                          <i onClick={() => Swal.fire("Already Booked")} className= "mt-5 pt-5 fab">BOOKED</i> }
                        </span>
                      </div>                     
                    </div>
                  </div>

                  <div class="modal fade" id="exampleModalCenter">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title">Approved Requests</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal">
                              </button>
                          </div>
                          <div class="modal-body">
                          {applicant.map((list, id) => {
                            return (   
                              list.alloted ? null  :                     
                                <h4 data-bs-dismiss="modal"  onClick={()=>AssignSlot(list.id)} value={list.id} key={id} >
                                    {list.companyname}
                                </h4>  
                                                                                     )
                            })}
                          </div>
                         
                      </div>
                  </div>
                  </div>
                  </>
                  )

                  })}

                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSlots;
