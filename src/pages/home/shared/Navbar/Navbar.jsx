// /* eslint-disable no-unused-vars */



import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import useAdmin from "../../../../hooks/useAdmin";
import useSurveyor from "../../../../hooks/useSurveyor";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
const [isAdmin] = useAdmin()
const [isSurveyor] = useSurveyor()
console.log(isSurveyor);


  const handleLogOut = () => {
    logOut();
  };
   const AllServices = (
    <>

    
      <li className="text-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          HOME
        </NavLink>
      </li>


    {
      isAdmin &&
      <li className="text-lg">
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
        ADMIN DASHBOARD
        </NavLink>
      </li> 

    }
    {
     
      isSurveyor &&
      <li className="text-lg">
        <NavLink
          to="/dashboard/surveyorHome"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
        SURVEYOR DASHBOARD
        </NavLink>
      </li> 
          
    }
     
     
      <li className="text-lg">
        <NavLink
          to="/allSurvey"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
         SURVEY
        </NavLink>
      </li>
      {
        isAdmin || isSurveyor ? " " :
        <li className="text-lg">
        <NavLink
          to="/proUser"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
         GO TO PRO
        </NavLink>
      </li>
}
      <li className="text-lg">
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
         ABOUT US
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
        CONTACT
        </NavLink>
      </li>
    </>
  );
  return (
    <div>

      <div className="navbar bg-black text-fuchsia-600 py-3 fixed z-10 bg-opacity-20   ">
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
              className=" bg-[#292B2B] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 hover:text-[#ffd485]"
            >
              {AllServices}
            </ul>
          </div>
          <div className="flex gap[0px] md:gap-3 items-center">
          <div className="grid  justify-center md:text-center ">
           <img
              className="w-[100px] ml-[-15px] md:ml-0 h-[45px] md:w-[70px] md:h-[70px]  text-white"
              src="https://i.ibb.co/x6XhT8N/creative-elegant-trendy-modern-monogram-260nw-1965459499-removebg-preview.png"
            ></img>
            <small className="text-[10px] md:mt-[5px] ">ON Survey</small>
           </div>
           <div>
           <h2 className="text-lg ml-[-10px] md:ml-0 md:text-2xl  text-white">
          <span className="text-fuchsia-400 text-2xl md:text-4xl  font-bold">O</span>pinio
              <span className="text-fuchsia-400 text-2xl font-bold md:text-4xl">N</span>ex
            </h2>
           </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{AllServices}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
             <div className="grid justify-center items-center mx-auto ">
             <div className="avatar online mx-auto">
  <div className="w-7 md:w-11  rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
             <p className="text-xs md:text-base text-center">{user?.displayName}</p>
             </div>
              
              <button onClick={handleLogOut} className="btn rounded-lg md:rounded-full w-12 md:w-24 text-fuchsia-500 bg-transparent  text-xs lowercase md:text-base   border-fuchsia-500">
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn rounded-lg text-xs md:text-base  md:rounded-full w-12 md:w-24 text-fuchsia-500 bg-transparent border-fuchsia-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;












