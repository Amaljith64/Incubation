import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Header from "../components/Header";
import '../App.css'
import Logo from "../components/Logo";

function UserApplication() {
  const { user } = useContext(AuthContext);
  const [application, setApplication] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/viewapplication/${user.user_id}`)
      .then((response) => {setApplication(response.data)
        console.log(response.data)
      });
  }, []);

  return (
    <div className="vh-100">
      <Header />
      <Logo />
      <div className="authincation h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-md-12">
              <div className="authincation-content">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">Your Applications</h4>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            
                            <table className="table header-border table-hover verticle-middle">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Company Name</th>
                                  <th scope="col">Progress</th>
                                  <th scope="col"></th>
                                  <th scope="col">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                { application.map((val)=>{
                                return(
                                  <tr>
                                  <th>{val.id}</th>
                                  <td>{val.companyname}</td>
                                  <td>
                                    <div
                                      className="progress"
                                      style={{
                                        background: "rgba(127, 99, 244, .1)",
                                      }}
                                    >
                                      <div
                                        className= {val.status==="PENDING" ? "progress-bar  pending" : val.status==="APPROVED" ? "progress-bar  approved" :
                                    val.alloted===true ? "progress-bar  alloted" : "progress-bar  denied"}
                                        
                                        role="progressbar"
                                      >
                                        <span className="sr-only">
                                        {val.status==="PENDING" ? "30% Complete" : val.status==="APPROVED" ? "60% Complete" :
                                    val.alloted===true ? "100% Complete" : "0% Complete"}
                                          70% Complete
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="badge badge-primary light">
                                    {val.status==="PENDING" ? "30% Complete" : val.status==="APPROVED" ? "60% Complete" :
                                    val.alloted===true ? "100% Complete" : "0% Complete"}
                                      
                                    </span>
                                  </td>
                                  <td>
                                    <b>
                                    {val.status==="PENDING" ? "PENDING" : val.status==="APPROVED" ? "APPROVED" :
                                    val.alloted===true ? "ALLOTED" : "DECLINED"}
                                      </b>
                                   
                                  </td>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserApplication;
