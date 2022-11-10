import './App.css';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import RegisterPage from './pages/RegisterPage'

import { AuthProvider } from './context/AuthContext'



import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header';
import AdminHome from './pages/AdminHome';
import UserApplication from './pages/UserApplication';
import ApprovedList from './pages/ApprovedList';
import DeclinedList from './pages/DeclinedList';
import AllotedList from './pages/AllotedList';
import AllSlots from './pages/AllSlots';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
          
          <Route element={<HomePage/>} path="/" exact />
          <Route element={<LoginPage/>} path="/login" />
          <Route element={<RegisterPage/>} path="/register" />
          <Route element={<AdminHome/>} exact path="/adminhome" />
          <Route element={<UserApplication/>} path="/viewapplication" />
          <Route element={<ApprovedList/>} path="/approved" />
          <Route element={<AllotedList />} path="/alloted" />
          <Route element={<DeclinedList/>} path="/declined" />
          <Route element={<AllSlots/>} path="/slots" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
