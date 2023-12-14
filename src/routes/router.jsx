import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/home/home/Home";
import Dashboard from "../layout/DashBoard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import CreateSurvey from "../pages/Dashboard/createSurvey/CreateSurvey";
import Status from "../pages/Dashboard/status/Status";
import SurveyDetails from "../pages/home/home/survey/SurveyDetails";
import PayMent from "../pages/payment/PayMent";
import PaymentUser from "../pages/Dashboard/PaymentUser/PaymentUser";
import UpdateSurvey from "../pages/Dashboard/UpdateSurvey/UpdateSurvey";
import MySurvey from "../pages/Dashboard/Mysurvey/MySurvey";
import AboutUs from "../pages/aboutUs/AboutUs";
import AdminFeedBack from "../pages/AdminFeedBack/AdminFeedBack";
import SurveyResponse from "../pages/SurveyResponse/SurveyResponse";
import UserResponse from "../pages/Dashboard/UserResponse/UserResponse";
import Error from "../pages/error/Error";
import AllSurveyCard from "../pages/AllSurveyCard/AllSurveyCard";
import SurveyorHome from "../pages/Dashboard/SurveyorHome/SurveyorHome";
import ProUserComment from "../pages/ProUserComment/ProUserComment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import PrivateRoute from "./PrivateRoute";
import SurveyorRoute from "./SurveyorRoute";
import AdminRoute from "./AdminRoute";
import Contact from "../pages/contact/Contact";
// import Rechart from "../pages/Rechart/Rechart";
// import PaymentUser from "../pages/Dashboard/PaymentUser/PaymentUser";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error> ,
      children: [
       {
        path: "/",
        element: <Home></Home>,
       },
      
       {
        path: "/survey/:id",
        element: <PrivateRoute><SurveyDetails></SurveyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://servey-poll-server.vercel.app/allSurvey/${params.id}`)
       },
       {
        path: "/proUser",
        element: <PrivateRoute><PayMent></PayMent></PrivateRoute>,
        loader:() => fetch('https://servey-poll-server.vercel.app/users')
       },
       {
        path: "/allSurvey",
        element: <AllSurveyCard></AllSurveyCard>,
       },
       {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
       },
       {
        path: "/contact",
        element: <Contact></Contact>,
       },
    ]
}
  , {
      path:"/login",
      element:<Login></Login>,
    },
    {
      path:"/register",
      element:<Register></Register>
    }
    ,
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"surveyorHome",
          element:<SurveyorRoute><SurveyorHome></SurveyorHome></SurveyorRoute>
        },
        {
          path:"adminHome",
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:"manageUsers",
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path:"paymentsUsers",
          element:<AdminRoute><PaymentUser></PaymentUser></AdminRoute>,
          loader:() => fetch('https://servey-poll-server.vercel.app/payments')
        },
        {
          path:"adminFeedback",
          element:<SurveyorRoute><AdminFeedBack></AdminFeedBack></SurveyorRoute>,
          loader:() => fetch('https://servey-poll-server.vercel.app/allSurvey')
        },
        {
          path:"createsurvey",
          element:<SurveyorRoute><CreateSurvey></CreateSurvey></SurveyorRoute>
        },
        {
          path:"surveyResponse",
          element:<AdminRoute><SurveyResponse></SurveyResponse></AdminRoute>
        },
        {
          path:"proUserComment",
          element:<SurveyorRoute><ProUserComment></ProUserComment></SurveyorRoute>
        },
        {
          path:"userResponse",
          element:<SurveyorRoute><UserResponse></UserResponse></SurveyorRoute>
        },
        {
          path:"mySurvey",
          element:<SurveyorRoute><MySurvey></MySurvey></SurveyorRoute>
        },
        {
          path:"updateSurvey/:id",
          element:<SurveyorRoute><UpdateSurvey></UpdateSurvey></SurveyorRoute>,
          loader: ({params}) => fetch(`https://servey-poll-server.vercel.app/allSurvey/${params.id}`)

        },
        {
          path:"status",
          element:<AdminRoute><Status></Status></AdminRoute>,
          loader:() => fetch('https://servey-poll-server.vercel.app/survey'),

        },
      ]
    }

])