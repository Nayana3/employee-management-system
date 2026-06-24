import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import EmployeeDetails from './pages/EmployeesDetails'
import NotApage from './pages/NotAPage'
import DashboardLayout from './layout/DashboardLayout'

function App() {
  return( <> 
  <Routes>
    <Route path="/" element={<Login />} />
    <Route element={<DashboardLayout />}>
    <Route path="/dashboard" element={<Dashboard />} /> 
    <Route path="/employees" element={<Employees />} />
    <Route path="/employees/:id" element={<EmployeeDetails />} />
    <Route path="*" element={<NotApage />} /> 
    </Route>
  </Routes>
  
  <nav>
    <Link to="/">Login</Link> 
    <Link to="/dashboard">Dashboard</Link> 
    <Link to="/employees">Employees</Link> 
  </nav>
  </>
  );
}

export default App
