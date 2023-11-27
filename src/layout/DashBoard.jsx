import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet,  } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";




const Dashboard = () => {
   
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
 

  // Check if data is still loading
 
    console.log('isAdmin:', isAdmin);

    

    return (
        <div className="md:flex   max-h-screen"  
       >
            {/* dashboard side bar */}
            <div className="lg:w-64 md:w-52  bg-black border-2 shadow-fuchsia-700  border-r-fuchsia-900 ">
                <ul className="menu p-4 text-white " >
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/surveyResponse">
                                    <FaUtensils></FaUtensils>
                                    Suervey Response</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/status">
                                    <FaList></FaList>
                                    Status</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymentsUsers">
                                    <FaBook></FaBook>
                                   Payments User</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers">
                                    <FaUsers></FaUsers>
                                    Manage Users</NavLink>
                            </li>
                        </>
                  :
                   
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/createsurvey">
                                        <FaCalendar></FaCalendar>
                                         Create Survey</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Real Payment History</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;