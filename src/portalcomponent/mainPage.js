import React from 'react'
import Sidebar from './sidebar';
import Footer from './footer';
import Cards from './cards';
import Topbar from './topbar';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';

function Mainpage() {
  return (
    <>
       <div id="wrapper">

<Sidebar/>
<div id="content-wrapper" class="d-flex flex-column"><div id="content">
<Topbar/>
<Outlet/>
<Footer/>

</div>
</div>

</div>
</>
  )
}

export default Mainpage