import logo from './logo.svg';
import './App.css';
import Open from './Open';
import  './Design.css'
import "./sb-admin-2.css"
import '../src/fontawesome-free/css/all.min.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Adminlogin from './AdminLogin/Adminlogin';
import Managerlogin from './ManagerLogin/Managerlogin';
import Employeelogin from './EmployeeLogin/Employeelogin';
import Adminsignup from './AdminSignup/Adminsignup';
import Managersignup from './ManagerSignup/Managersignup';
import Employeesignup from './EmployeeSignup/Employeesignup';
import Mainpage from './portalcomponent/mainPage';
import Dashboard from './portalcomponent/Dashboard';
import Buttons from './portalcomponent/Buttons';
import Cards from './portalcomponent/cards';
import Colors from './portalcomponent/Colors';
import Border from './portalcomponent/Border';
import Animation from './portalcomponent/Animation';
import Other from './portalcomponent/Other';
import ErrorPage from './portalcomponent/ErrorPage';
import Blankpage from './portalcomponent/Blankpage';
import Tables from './portalcomponent/Tables';
import Charts from './portalcomponent/Charts'

function App() {
	const user = localStorage.getItem("token");

  return (
   <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Open/>}></Route>
  <Route path="/login" element={<Login/>}>
    <Route path='/login/admin_login' element={<Adminlogin/>}></Route>
    <Route path='/login/admin_signup' element={<Adminsignup/>}></Route>
    <Route path='/login/manager_login' element={<Managerlogin/>}></Route>
    <Route path='/login/manager_signup' element={<Managersignup/>}></Route>
    <Route path='/login/employee_login' element={<Employeelogin/>}></Route>
    <Route path='/login/employee_signup' element={<Employeesignup/>}></Route>


    


  </Route>
  <Route  path="/portal" element={<Mainpage/>}>
    <Route  path="/portal" element={<Dashboard/>}> </Route>
    <Route  path="/portal/buttons" element={<Buttons/>}> </Route>
    <Route  path="/portal/cards" element={<Cards/>}> </Route>
    <Route  path="/portal/colors" element={<Colors/>}> </Route>
    <Route  path="/portal/borders" element={<Border/>}> </Route>
    <Route  path="/portal/animations" element={<Animation/>}> </Route>
    <Route  path="/portal/other" element={<Other/>}> </Route>
    <Route  path="/portal/404page" element={<ErrorPage/>}> </Route>
    <Route path="/portal/blankpages" element={<Blankpage/>}></Route>
    <Route path="/portal/charts" element={<Charts/>}></Route>
    <Route path="/portal/tables" element={<Tables/>}></Route></Route>
  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
