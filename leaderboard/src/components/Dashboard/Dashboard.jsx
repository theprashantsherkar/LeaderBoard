import React from 'react'
import {Link, useNavigate } from 'react-router-dom'

function Dashboard() {

    const navigate = useNavigate();


  return (
      <>
          <button className='btn btn-primary' onClick={()=> navigate(-1)}>Back</button>
      this is a dashboard
      </>
  )
}

export default Dashboard