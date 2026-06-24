import { Link } from "react-router-dom"

const Sidebar =()=>{
    return(
        <>
          <div>
            <Link to="/dashboard">Dashboard </Link>
          </div>
          <div>
            <Link to="/employees">Employees </Link>
          </div>
        </>
    )
}

export default Sidebar;