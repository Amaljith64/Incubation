import React,{useState, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function RegisterPage() {    
    let {userSignup } = useContext(AuthContext)

    const Navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });
    const registerOptions = {
        name: { required: "Name is required" },
        email: {
            required: 'Email is required.',
            pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    };
    
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
                                    <form onSubmit={handleSubmit(userSignup)} >
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Username</strong></label>
                                            <input type="text" className="form-control" placeholder="username" name="name" {...register('name', registerOptions.name)} />
                                            <small className="text-danger">
                                                {errors?.name && errors.name.message}
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Email</strong></label>
                                            <input type="email" className="form-control" placeholder="hello@example.com" name="email" {...register('email', registerOptions.email)} />
                                            <small className="text-danger">
                                                {errors?.email && errors.email.message}
                                            </small>
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-1"><strong>Password</strong></label>
                                            <input type="password" className="form-control" placeholder="Password"  name="password" {...register('password', registerOptions.password)} />
                                            <small className="text-danger">
                                                {errors?.password && errors.password.message}
                                            </small>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-primary btn-block">Sign me up</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                    <p>Already have an account? <a className="text-primary" onClick={() => Navigate('/login')}>Sign in</a></p>
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