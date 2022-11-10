import React,{useState, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'

function RegisterPage() {
    let {userSignup } = useContext(AuthContext)
  return (
    <div className="vh-100">
       <div className="authincation h-100">
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
									<div className="text-center mb-3">
										<a href="\"><img src="images/logo-full.png" alt=""/></a>
									</div>
                                    <h4 className="text-center mb-4">Sign up your account</h4>
                                    <form onSubmit={userSignup} >
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Username</strong></label>
                                            <input type="text" className="form-control" placeholder="username" name="name"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Email</strong></label>
                                            <input type="email" className="form-control" placeholder="hello@example.com" name="email"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Password</strong></label>
                                            <input type="password" className="form-control" placeholder="Password"  name="password"/>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-primary btn-block">Sign me up</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Already have an account? <span className="text-primary"> <Link to = '/login' > Sign in </Link> </span></p>
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
  )
}

export default RegisterPage