import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Adminlogin from './AdminLogin/Adminlogin'

function Login() {
  return (
    <div className='login'>
       <div className='category'>
        

<Link style={{color:"#023047"}} class="nav-link " to={"/login/admin_login"}> <span>Admin</span><br/><p className='clickhere'>click here</p></Link>
<Link  class="nav-link" to={"/login/manager_login"}> <span>Manager</span><br/><p className='clickhere'>click here</p></Link>

          <Link  class="nav-link" to={"/login/employee_login"}> <span>Employee</span><br/><p className='clickhere'>click here</p></Link>
        </div>
      {/* <div className='logo'>
       
        <div className='forh'>
                <p style={{color:"#0087fa"}}>admin<br></br><b 
                     style={{color:"#ffb500"}}
                     >
                    &nbsp;CRM</b></p>
                </div>
        </div> */}

      <div className='insidelogin'>
        <Outlet/>

      </div>
      <p style={{color:"white"}}><b> click Admin / Manager / Employee for Login - Dashboard</b></p>
      <Link style={{backgroundColor:"white"}}
      className='btn btn mt-3' to={"/"}>Back</Link>

    </div>
  )
}

export default Login