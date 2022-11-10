import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Header from "../components/Header";
import '../App.css'

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
                                  <th scope="col">Product</th>
                                  <th scope="col">Popularity</th>
                                  <th scope="col">Sales</th>
                                </tr>
                              </thead>
                              <tbody>
                                { application.map((val)=>{
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
                                        className= {val.pending===true ? "progress-bar  pending" : val.Approved===true ? "progress-bar  approved" :
                                    val.alloted===true ? "progress-bar  alloted" : "progress-bar  denied"}
                                        
                                        role="progressbar"
                                      >
                                        <span className="sr-only">
                                          70% Complete
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="badge badge-primary light">
                                      70%
                                    </span>
                                  </td>
                                </tr>
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
