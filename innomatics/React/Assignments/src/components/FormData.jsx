import React from 'react'
import { useState } from 'react'

const FormData = () => {
  const [formdata, setFormdata]=useState(
    {
      employeename:'',
      department:'',
      rating:''
    }
  )
  const[submit, setSubmit]=useState([]);
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormdata((prevState)=>({
      ...prevState,
      [name]:value,
    }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmit([...submit,formdata]);
    setFormdata({employeename:'',department:'',rating:''})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Employee Name</label>
      <input type="text" id="employeename" name='employeename' value={formdata.employeename} onChange={handleChange} /><br />
      <label htmlFor='department'>Department</label>
      <input type="text" id="department" name='department' value={formdata.department} onChange={handleChange} /><br />
      <label htmlFor='rating'>Rating</label>
      <input type="text" id="rating" name='rating' value={formdata.rating} onChange={handleChange} /><br />

      <button>Submit</button>
      </form>

    </>
  )
}

export default FormData