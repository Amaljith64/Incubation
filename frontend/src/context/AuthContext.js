import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);
  const[viewdetails,setviewdetails]=useState([])
  const Navigate = useNavigate();

  let loginUser = async (e) => {
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.username,
        password: e.password,
      }),
    });

    const Swal=require("sweetalert2")
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      if(jwt_decode(data.access).is_superuser){
        Navigate('/adminhome')
      }else{
        Navigate('/')
      }
    } else {
      Swal.fire({ title:"Fill all field",
            
            icon:"warning",})
    }
  };


  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    Navigate("/login");
  };



  let viewDetail = (id)=> {
 
    axios.get(`http://127.0.0.1:8000/adminside/viewdetail/${id}`).then((response)=>{
      setviewdetails(response.data)


    })
    

  }


  let userSignup = async (e)=>{
    
    let response = await axios.post("http://127.0.0.1:8000/api/signup/",
    {'username':e.name, 'email':e.email, 'password':e.password})
    
  

    if (response.status === 200){
        
      Navigate("/login");
         
         console.log("register Successful");
        }
        else{
          
          
          console.log("SOmething problem in register");
    }
}

  let updateToken = async () => {
    console.log("update token......");
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
    if(loading){
        setLoading(false)
    }
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    userSignup:userSignup,
    viewDetail:viewDetail,
    viewdetails:viewdetails,
  };

  useEffect(() => {
    if(loading){
        updateToken()
    }


    let fourminutes = 1000* 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourminutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
        {loading ?null: children}
        </AuthContext.Provider>
  );
};




