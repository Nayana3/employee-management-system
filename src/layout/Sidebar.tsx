import { Link } from "react-router-dom"

const Sidebar =()=>{
    return(
        <>
        <div style={{width:"200px",height:"200px"}}>
          <div>
            <Link to="/dashboard">Dashboard </Link>
          </div>
          <div>
            <Link to="/employees">Employees </Link>
          </div>
        </div>
        </>
    )
}

export default Sidebar;