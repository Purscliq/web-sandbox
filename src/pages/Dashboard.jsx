import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../components";

export default function Dashboard() {
  return (
    <div style={{ minHeight: "640px" }}>
      <div className="h-screen bg-semiwhite">
        <Topbar />
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
