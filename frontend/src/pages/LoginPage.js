
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange"
  });

  const registerOptions = {
    username: { required: "Name is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 4,
        message: "Password will have at least 4 characters"
  }
}
};
  return (
    // <div>
    //   <form onSubmit={loginUser}>
    //     <input type="text" name='username' placeholder='Enter Username' />
    //     <input type="password" name='password' placeholder='Enter Password' />
    //     <input type="submit"   />
    //   </form>
    // </div>
    
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
                        <a href="\"><img src="images/logo-full.png" alt="" /></a>
                      </div>
                      <h4 className="text-center mb-4">Sign in your account</h4>
                      <form onSubmit={handleSubmit(loginUser)}>
                        <div className="mb-3">
                          <label className="mb-1"><strong>Username</strong></label>
                          <input type="text" className="form-control" name='username' placeholder='Username' {...register('username', registerOptions.username)} />
                          <small className="text-danger">
                            {errors?.username && errors.username.message}
                          </small>
                        </div>
                        <div className="mb-3">
                          <label className="mb-1"><strong>Password</strong></label>
                          <input type="password" className="form-control" name='password' placeholder="Password" {...register('password', registerOptions.password)} />
                          <small className="text-danger">
                            {errors?.password && errors.password.message}
                          </small>
                        </div>
                        
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                        </div>
                      </form>
                      <div className="new-account mt-3">
                        <p>Don't have an account? <span className="text-primary" > <Link to = '/register'>Sign up</Link></span></p>
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

export default LoginPage
