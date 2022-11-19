import React, {  useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from "axios"
import SweetAlert from 'react-bootstrap-sweetalert';
import AuthContext from '../context/AuthContext';
import Logo from './Logo';

function ApplicationForm() {

const Swal=require("sweetalert2")

var token=localStorage.getItem('authToken')

const {user} = useContext(AuthContext)
console.log(user.user_id);


const [data,setData]=useState({
    user:user.user_id,
    companyname:"",
    email:"",
    phone:"",
    address:"",
    img:""
   
  })
const uploadImage = (e)=>{
    const file = e.target.files[0]
    setData({...data,img:file})
    console.log(data)
  }
  
const onHandlechange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    console.log(data,'.............')
}
const uploadData=(e)=>{
    console.log('clickeddddddddddddddd')
    e.preventDefault()
    console.log(data.img)
    if(data.img===''){
      Swal.fire('Upload LOGO! ', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return
    }
    console.log(data,'data.............................')
  
    const formSent= new FormData()
    for(let key in data){
      formSent.append(key,data[key])
    }
    console.log(formSent,'formmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm')
//    const Authorization=`Bearer ${token.access}`
  axios.post("http://127.0.0.1:8000/api/userapplication/",formSent).then((response)=>{
    console.log(response.status,'jjjjjjjjjjjjjjjjjjjjj')
           
            console.log('hhhhhhhhhhhhhhhhhhhhhhhh')
            
            Swal.fire({ title:"uploaded",
            
            icon:"success",})
            setData({
                user:"",
                companyname:"",
                email:"",
                phone:"",
                address:"",
                img:""
            })
        
        
    }).catch((error)=>{
        console.log(error.response.data)
        Swal.fire({ title:error.response.data.message,
            
            icon:"success",})
    })

}
    return (
        <div>
            <Logo />
            <Header />

            <div className="authincation h-100" >
                <div className="h-100">
                    <div className="justify-content-center h-100 align-items-center">
                        <div className="content-body" style={{ paddingTop: "0" }}>
                            <div className="container-fluid">
                                <div className="row page-titles">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active"><a href="/">Form</a></li>
                                        <li className="breadcrumb-item"><a href="/">Validation</a></li>
                                    </ol>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header justify-content-center">
                                                <h4 className="card-title"><b>APPLICATION FOR INCUBATION</b></h4>
                                            </div>

                                            <div className="card-body">
                                                <div className="form-validation">
                                                    <form className="needs-validation" onSubmit={uploadData}  >
                                                        <div className="row">
                                                            <div className="col-xl-12">                                                               
                                                                <div className="mb-3 row">
                                                                    <label className="col-lg-4 col-form-label" htmlFor="validationCustom015">CompanyName
                                                                        <span className="text-danger">*</span>
                                                                    </label>
                                                                    <div className="col-lg-8">
                                                                        <input type="text" value={data.companyname} onChange={onHandlechange} className="form-control" id="validationCustom015" placeholder="Enter your CompanyName.." required name='companyname' />
                                                                        <div className="invalid-feedback">
                                                                            Please enter a CompanyName.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 row">
                                                                    <label className="col-lg-4 col-form-label" htmlFor="validationCustom016">Address
                                                                        <span className="text-danger">*</span>
                                                                    </label>
                                                                    <div className="col-lg-8">
                                                                        <input type="text" value={data.address} onChange={onHandlechange} className="form-control" id="validationCustom016" placeholder="Enter your Company Address.." required name='address' />
                                                                        <div className="invalid-feedback">
                                                                            Please enter Address.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 row">
                                                                    <label className="col-lg-4 col-form-label" htmlFor="validationCustom02">Company Email <span
                                                                        className="text-danger">*</span>
                                                                    </label>
                                                                    <div className="col-lg-8">
                                                                        <input type="text" value={data.email} onChange={onHandlechange} className="form-control" id="validationCustom02" placeholder="Enter valid email.." required name='email' />
                                                                        <div className="invalid-feedback">
                                                                            Please enter a Email.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-12">
                                                                
                                                                <div className="mb-3 row">
                                                                    <label className="col-lg-4 col-form-label" htmlFor="validationCustom08">Phone
                                                                        <span className="text-danger">*</span>
                                                                    </label>
                                                                    <div className="col-lg-8">
                                                                        <input type="number" value={data.phone} onChange={onHandlechange} className="form-control" id="validationCustom08" placeholder="212-999-0000" required name='phone'/>
                                                                        <div className="invalid-feedback">
                                                                            Please enter a phone no.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 row">
                                                                    <label className="col-lg-4 col-form-label" htmlFor="validationCustom08">Company Logo
                                                                        <span className="text-danger">*</span>
                                                                    </label>
                                                                    <div className="col-lg-8">
                                                                        <div className="input-group mb-3">
                                                                            <div className="form-file">
                                                                                <input type="file" className="form-file-input form-control" onChange={uploadImage} name='img'/>
                                                                            </div>
                                                                            <span className="input-group-text"></span>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="mb-3 row">
                                                                    <div className="col-lg-12 ms-auto">
                                                                        <button type="submit" className="btn  btn-primary col-lg-12">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
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
        </div >
    )
}

export default ApplicationForm