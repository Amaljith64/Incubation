import { Route, useNavigate  } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'


const PrivateRoute = ({children,...rest}) => {
    let {user} = useContext(AuthContext)
    const Navigate=useNavigate()

    return(
        <Route {...rest}>{ !user ? Navigate('/login'):  children}</Route>
    )
}


export default PrivateRoute