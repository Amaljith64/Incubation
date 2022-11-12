import React, { useEffect, useState,useContext } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AdminSideBar from '../components/AdminSideBar'
import axios from "axios";
import AuthContext from '../context/AuthContext';




const ApprovedList = () => {



    const[data,setData]= useState([])
    const Swal=require("sweetalert2")
    const {viewdetails,viewDetail} = useContext(AuthContext)
    

    useEffect(() => {
    axios.get("http://127.0.0.1:8000/adminside/alloted").then((response)=>{setData(response.data)
     
    })
    
  }, []);





  return (
    <div>
      <Logo />
      <Header />
      <AdminSideBar />
      <div className='content-body'>
        <div className='container-fluid'>
        <div className="col-lg-12">
          { data.length === 0 ?
          <div className="card">
                  <div className="card-header">
                      <h4 className="card-title">No New Requests</h4>
                  </div></div>:
              <div className="card">
                  <div className="card-header">
                      <h4 className="card-title">Recent Payments Queue</h4>
                  </div>
                  <div className="card-body">
                      <div className="table-responsive">
                          <table className="table table-responsive-md">
                              <thead>
                                  <tr>
                                      <th style={{width:"80px"}}><strong>#</strong></th>
                                      <th><strong>NAME</strong></th>
                                      <th><strong>EMAIL</strong></th>
                                      <th><strong>PHONE NUMBER</strong></th>
                                      <th><strong>VIEW</strong></th>
                                      <th><strong>STATUS</strong></th>
                                      <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                              {data.map((list,id)=>{
                                  return(
                                      <tr key={list.id}>
                                      <td > <strong>{list.id}</strong></td>
                                      <td>{list.companyname}</td>
                                      <td>{list.email}</td>
                                      <td>{list.phone}</td>
                                      <td><span data-bs-toggle="modal" onClick={()=> viewDetail(list.id) } data-bs-target="#exampleModalCenter" className="badge  badge-primary">VIEW</span></td>
                                      <td><span className="badge  badge-success">ALLOTED</span></td>
                                      
                                  </tr>
                                  )
                                })}   
            
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>}
                                
                                    <div class="modal fade" id="exampleModalCenter">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal">
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                  <p>{viewdetails && viewdetails.companyname}</p>
                                                  <p>{viewdetails.email}</p>
                                                  {viewdetails.alloted === true ? <p>Alloted</p> : null }
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ApprovedList
