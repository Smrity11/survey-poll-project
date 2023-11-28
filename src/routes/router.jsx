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
// import PaymentUser from "../pages/Dashboard/PaymentUser/PaymentUser";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
       {
        path: "/",
        element: <Home></Home>,
       },
      
       {
        path: "/survey/:id",
        element: <SurveyDetails></SurveyDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/allSurvey/${params.id}`)
       },
       {
        path: "/proUser",
        element: <PayMent></PayMent>,
       },
       {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
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
          path:"manageUsers",
          element:<ManageUsers></ManageUsers>
        },
        {
          path:"paymentsUsers",
          element:<PaymentUser></PaymentUser>,
          loader:() => fetch('http://localhost:5000/payments')
        },
        {
          path:"adminFeedback",
          element:<AdminFeedBack></AdminFeedBack>,
          loader:() => fetch('http://localhost:5000/allSurvey')
        },
        {
          path:"createsurvey",
          element:<CreateSurvey></CreateSurvey>
        },
        {
          path:"surveyResponse",
          element:<SurveyResponse></SurveyResponse>
        },
        {
          path:"userResponse",
          element:<UserResponse></UserResponse>
        },
        {
          path:"mySurvey",
          element:<MySurvey></MySurvey>
        },
        {
          path:"updateSurvey/:id",
          element:<UpdateSurvey></UpdateSurvey>,
          loader: ({params}) => fetch(`http://localhost:5000/allSurvey/${params.id}`)

        },
        {
          path:"status",
          element:<Status></Status>,
          loader:() => fetch('http://localhost:5000/survey'),

        },
      ]
    }

])