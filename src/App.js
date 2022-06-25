// import logo from './logo.svg';
import './App.css';
import Forminput from './component/Forminput';
import React, { useRef, useState } from 'react'

const App = () => {
  const usernameref = useRef()
  // const [username,setUsername]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(usernameref)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Forminput refer={usernameref} placeholder="Username" type="text" />
        <Forminput placeholder="Email" type="texet" />
        <Forminput placeholder="Full Name" type="text" />
        <Forminput placeholder="Password" type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App