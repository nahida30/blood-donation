import  { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/public/images/logo.png';
import { AuthContext } from './Providers/AuthProvider';
import Dashboard from './Dashboard/Dashboard';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showDashboard, setShowDashboard] = useState(false);

  

  const handleAddBlogClick = () => {
    // Implement logic to navigate or show the add blog form
    // You can use react-router-dom history or state management for navigation
    console.log('Add Blog clicked');
  };

  const handleBackButtonClick = () => {
    setShowDashboard(false);
  };

    const navLink = <>
    <NavLink to="/" className={({isActive,isPending}) => 
        isPending ? "pending" : isActive ? "text-red-700 ": ""}>Home</NavLink>
    <NavLink to="/about" className={({isActive,isPending}) => 
        isPending ? "pending" : isActive ? "text-red-700  ": ""}>Donation Requests</NavLink>
   
    <NavLink to="/blog" className={({isActive,isPending}) => 
        isPending ? "pending" : isActive ? "text-red-700 ": ""}>Blog</NavLink>



    
    </>


   return (
    <div>
      {showDashboard ? null : (
        <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
              >
                {navLink}
              </ul>
            </div>
            <div className=" flex normal-case text-xl">
              {/* Conditionally render the logo based on showDashboard state */}
              {!showDashboard && <img src={logo} className="h-12 ml-6" />}
              <p className="-ml-[12] font-bold mt-5 text-red-700">Blood Donors</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-xl">
              {navLink}
            </ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt={user?.displayName} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button className="btn btn-sm text-black btn-ghost">{user.displayName}</button>
                  </li>
                  <li>
                    <Link to="dashboard" className="btn btn-sm text-black btn-ghost">
                      DashBoard
                    </Link>
                  </li>
                  <li>
                    <button className="btn btn-sm text-black btn-ghost" onClick={logOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline">Login</button>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Dashboard component will be rendered conditionally */}
      {showDashboard && (
        <Dashboard
          userName={user.displayName}
          onAddBlogClick={handleAddBlogClick}
          onBackButtonClick={handleBackButtonClick}
        />
      )}
    </div>
  );
};

export default Navbar;