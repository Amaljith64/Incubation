import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Logo from "../components/Logo";
import AdminSideBar from "../components/AdminSideBar";

const AllSlots = () => {
  const Swal = require("sweetalert2");
  const [slots, setSlots] = useState([]);
  const [applicant, setApplicant] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/adminside/approved")
      .then((response) => setApplicant(response.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/adminside/slotbooking")
      .then((response) => setSlots(response.data));
  }, []);

console.log(slots)

console.log(applicant)


const AssignSlot=(slotid,userid)=>{
  
}

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
              </div>
              <div className="card-body pb-1">
                <div id="lightgallery" className="row">

                {slots.map((data, id) => {

                  return(
                    <>
                    <div className="col-xl-3 col-xxl-3 col-sm-6">
                    <div className="card overflow-hidden">
                      <div className={`social-graph-wrapper ${data.available===true ? `widget-googleplus` : `widget-linkedin`} `}>
                        <span className="s-icon "> 
                        {data.available===true ?                
                          <i data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className= "mt-5 pt-5 fab">{data.id}</i> :
                          <i onClick={() => Swal.fire("Already Booked")} className= "mt-5 pt-5 fab">{data.id}</i> }

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
                                <option onClick={AssignSlot(data.id,list.id)} value={list.id} key={id} >
                                    {list.companyname}
                                </option>                              )
                            })}
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
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