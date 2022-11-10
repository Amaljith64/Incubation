import React, { useEffect, useState,useContext } from 'react'
import ApplicationForm from '../components/ApplicationForm'
import AuthContext from '../context/AuthContext'

function HomePage() {
  const [notes, setNotes] = useState([])
  let {authTokens,logoutUser}=useContext(AuthContext)
  useEffect(() => {
    getNotes()

  }, [])
  let getNotes = async() =>{
    let response = await fetch('http://127.0.0.1:8000/api/notes/', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
    })
    let data = await response.json()
    if(response.status === 200){
      setNotes(data)
  }else if(response.statusText === 'Unauthorized'){
      logoutUser()
  }
  }
  return (
    <div>
        <ApplicationForm/>
        <p>You are logged to HomePage</p>
        <ul>
          {notes.map(note=>(
            <li key={note.id}>{note.body}</li>
          ))}
        </ul>
    </div>
  )
}

export default HomePage