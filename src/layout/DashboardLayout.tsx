import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header/>

      <div style={{ display: "flex" }}>
        <Sidebar/>
        <main style={{padding:"20px",flex:1}}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
