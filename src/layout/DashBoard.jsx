import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet,  } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { Helmet } from "react-helmet";
import useSurveyor from "../hooks/useSurveyor";




const Dashboard = () => {
   
   
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
 


    return (

        <>
            <Helmet>
                 <title>OpinioNex | Dashboard</title>
             </Helmet>
             <div className="md:flex   max-h-screen"  
       >
            {/* dashboard side bar */}
            <div className="lg:w-64 md:w-52  bg-black border-2 shadow-fuchsia-700  border-r-fuchsia-900 ">
                <ul className="menu p-4 text-white " >
                    {
                        isAdmin && <>
                        <h1 className="text-xl font-bold text-white mt-5 mb-10">ADMIN DASHBOARD</h1>
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
                    }
                   {isSurveyor &&
                            <>
                            <h1 className="text-xl font-bold text-white mt-5 mb-10">SURVEYOR DASHBOARD</h1>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        Surveyor Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/createsurvey">
                                        <FaCalendar></FaCalendar>
                                         Create Survey</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/mySurvey">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Survey</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/userResponse">
                                        <FaAd></FaAd>
                                        User Response</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/adminFeedback">
                                        <FaList></FaList>
                                        Admin Feedback
                                        </NavLink>
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
        </>
       
    );
};

export default Dashboard;