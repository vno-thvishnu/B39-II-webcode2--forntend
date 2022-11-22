import React from "react";
// import { Chart } from 'chart.js';
import Cards from "./cards";
import { Link } from "react-router-dom";

// let  bgColor ={"Blue":"#4c72de"}

function Sidebar() {
    return (


        <ul class="navbar-nav bg-gradient-warning sidebar sidebar-dark accordion" id="accordionSidebar">


            <a class="sidebar-brand d-flex align-items-center justify-content-center" >
                <div class="sidebar-brand-icon rotate-n-15">
                </div>
                <div class="sidebar-brand-text mx-3">Hello CRM <sup></sup></div>
            </a>


            <hr class="sidebar-divider my-0" />

            <li class="nav-item active">
                <Link class="nav-link" to={"/portal"}  >
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>


            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Interface
            </div>






         
            <h6 style={{color:"white"}}>Custom Components:</h6>

                       
                        <li class="nav-item">
                <Link  to={"/portal/buttons"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>buttons</span></Link>
            </li>
            
            <li class="nav-item">
                <Link to={"/portal/cards"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>cards</span></Link>
            </li>

                       
                
    
                        <h6 style={{color:"white"}}>Custom Utilities:</h6>
    
                        <li class="nav-item">
                <Link  to={"/portal/colors"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>colors</span></Link>
            </li>
            
            <li class="nav-item">
                <Link to={"/portal/borders"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Borders</span></Link>
            </li>
                      
                      
            <li class="nav-item">
                <Link  to={"/portal/animations"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>animations</span></Link>
            </li>
            
            <li class="nav-item">
                <Link to={"/portal/other"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>others</span></Link>
            </li>
                       
                    
            


            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                Addons
            </div>


       

            

                    <h6 style={{color:"white"}}>Other Page</h6>

               
                    <li class="nav-item">
                <Link to={"/portal/404page"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>404 page</span></Link>
            </li>
            <li class="nav-item">
                <Link to={"/portal/blankpages"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Blank page</span></Link>
            </li>
                
                   

                       


                

            <li class="nav-item">
                <Link to={"/portal/charts"} class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
            </li>


            <li class="nav-item">
                <Link to={"/portal/tables"} class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>


            <hr class="sidebar-divider d-none d-md-block" />


            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


            {/* <div class="sidebar-card d-none d-lg-flex">
            <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
            <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div> */}

        </ul>






    )
}

export default Sidebar