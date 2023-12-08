import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('/dashboard')
   
    return (
        <div>
            {noHeaderFooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;