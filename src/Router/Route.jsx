import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Components/Home";
import About from "../Components/About";
import Login from "../Components/User/Login/Login";
import Registration from "../Components/User/Registration/Registration";
import Dashboard from "../Components/Dashboard/Dashboard";
import AdminHome from "../Components/Dashboard/AdminHome";
import AllUsers from "../Components/Dashboard/AllUsers";
import AllRequest from "../Components/Dashboard/AllRequest";
import AddBlog from "../Components/Dashboard/AddBlog";
import BlogWrite from "../Components/Home/BlogWrite";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
          path: "/login",
          element: <Login></Login> 
        },
        {
          path: "/register",
          element: <Registration></Registration>
        },
        {
          path: "/blog",
          element: <BlogWrite></BlogWrite>
        }
        
      
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          
            path: "adminHome",
            element: <AdminHome></AdminHome> 
          
        },
        {
          path: "allUsers",
          element: <AllUsers></AllUsers>
        },
        {
          path: "allRequest",
          element: <AllRequest></AllRequest>
        },
        {
          path: "addBlog",
          element: <AddBlog></AddBlog>
        }
      ]
    }
  ]);

export default router;