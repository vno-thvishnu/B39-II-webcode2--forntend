import React from 'react'
import { Link } from 'react-router-dom'
import ilus from './assets/ilus.jpg'
function Open() {
  return (
    <div className='open'>
        <div className='insideopen '>
                <div className='rowtab'>
                <div className='forh'>
                <p style={{color:"#0087fa"}}>Hello<b 
                     style={{color:"#ffb500"}}
                     >
                    &nbsp;CRM</b></p>
                </div>
                    <div className='rowtab1'>
                    <h5>products</h5>
                    <h5>company</h5>
                    <h5>news</h5>
                    <h5>contacts</h5>
                    </div>


        </div>
        <div className='insideopen2'>
        <div className='opencontent'>

<h5 style={{color:"black", paddingLeft:"5px"}}>Customer relationship management</h5>
<h5 style={{color:"grey",paddingLeft:"5px"}}>(CMR)</h5>
<p style={{marginTop:"15px",fontSize:"10px"}}> Is a process in which a business or other organization administers
     its interactions with customers,<br/>
     typically using data analysis to study large amounts of information.
    Its refer to all strategies techniques,<br/> tools
    and technologies usedby enterprises for
    developing,retaining and acquiring customers
</p>

<p style={{color:"#ffb500",marginTop:"20px"}}><b>Admin / Manager / Employee</b> login here</p>
<Link to={"/login"} className='btn btn-primary '> Next Page</Link>

</div>
<div className='openimage'>
<img  style={{width:"350px",height:"275px" }} src={ilus}/>
</div>
        </div>
        
            
           

        </div>
    </div>
  )
}

export default Open