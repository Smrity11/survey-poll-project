import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/shared/Navbar/Navbar";
import Footer from "../pages/home/shared/Footer/Footer";

const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;