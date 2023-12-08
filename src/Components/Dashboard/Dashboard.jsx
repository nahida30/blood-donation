import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-red-300">
        <ul className="menu">
          <li><NavLink to="/">Back</NavLink> </li>
          <li><NavLink to="/dashboard/adminHome">Admin Home</NavLink></li>
          <li><NavLink to="/dashboard/allUsers">All users</NavLink></li>
          <li><NavLink to="/dashboard/allRequest">All request</NavLink></li>
          <li><NavLink to="/dashboard/addBlog">Content management</NavLink></li>
         
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Dashboard;