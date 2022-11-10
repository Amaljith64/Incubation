import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AdminSideBar from '../components/AdminSideBar'
import axios from "axios";

const ApprovedList = () => {



    const[data,setData]= useState([])
    const Swal=require("sweetalert2")

    useEffect(() => {
    axios.get("http://127.0.0.1:8000/adminside/approved").then((response)=>{setData(response.data)
     
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
                                      <tr>
                                      <td > <strong>key={list.id}</strong></td>
                                      <td>{list.companyname}</td>
                                      <td>{list.email}</td>
                                      <td>{list.phone}</td>
                                      <td><span className="badge  badge-primary">VIEW</span></td>
                                      <td><span className="badge  badge-success">APPROVED</span></td>
                                      
                                  </tr>
                                  )
                                })}   
            
                              </tbody>
                          </table>
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
