import React, { useEffect, useState,useContext } from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import AdminSideBar from '../components/AdminSideBar'
import AuthContext from '../context/AuthContext';


import axios from "axios";

function AdminHome() {


    const[data,setData]= useState([])
    const Swal=require("sweetalert2")
    useEffect(() => {
    axios.get("http://127.0.0.1:8000/adminside/").then((response)=>{setData(response.data)
     
    })
    
  }, []);




  const approveList = (id)=>{
    Swal.fire({
     title:"are you sure",
      text:"approve the list",
      icon:"warning",
      showCancelButton:"true",
      confirmButtonColor:"#3085D6",
      cancelButtonColor:"#d33",
      confirmButtonText:"YES,Approve",
    }).then((result)=>{
      if(result.isConfirmed){
        axios.post(`http://127.0.0.1:8000/adminside/approveRequest/${id}`).then(()=>window.location.reload())
      }
    })

  }
  
  const declineList=(id)=>{
    Swal.fire({
      title:"are you sure",
       text:"decline the list",
       icon:"warning",
       showCancelButton:"true",
       confirmButtonColor:"#3085D6",
       cancelButtonColor:"#d33",
       confirmButtonText:"YES,decline",}).then((result)=>{
        if (result.isConfirmed){
          axios.post(`http://127.0.0.1:8000/adminside/declineRequest/${id}`).then(()=>window.location.reload())
        }
       })
  }
  const {viewdetails,viewDetail} = useContext(AuthContext)
  


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
                            <div className="card-header justify-content-center">
                                <h4 className="card-title ">No New Requests</h4>
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
                                                <th><strong>APPROVE</strong></th>
                                                <th><strong>DECLINE</strong></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {data.map((list,id)=>{
                                            return(
                                                <tr>
                                                <td><strong>{list.id}</strong></td>
                                                <td>{list.companyname}</td>
                                                <td>{list.email}</td>
                                                <td>{list.phone}</td>
                                                <td><span data-bs-toggle="modal" onClick={()=> viewDetail(list.id) } data-bs-target="#exampleModalCenter" className="badge   badge-primary">VIEW</span></td>
                                                <td><span className="badge  badge-success"onClick={()=>approveList(list.id)}>Approve</span></td>
                                                <td><span className="badge  badge-danger"onClick={()=>declineList(list.id)}>Decline</span></td>
                                                
                                            </tr>
                                            )
                                          })}   
											
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
}
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
                                                  <p>{viewdetails.status}</p>
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

export default AdminHome
