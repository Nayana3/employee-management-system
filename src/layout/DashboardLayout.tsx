import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <header>Header</header>

      <div style={{ display: "flex" }}>
        <aside>Sidebar</aside>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
