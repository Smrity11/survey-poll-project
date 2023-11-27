import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Survey from "../pages/survey/Survey";
import Home from "../pages/home/home/home/Home";
import Dashboard from "../layout/DashBoard";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import CreateSurvey from "../pages/Dashboard/createSurvey/CreateSurvey";
import Status from "../pages/Dashboard/status/Status";
import SurveyDetails from "../pages/home/home/survey/SurveyDetails";
import PayMent from "../pages/payment/PayMent";

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
        path: "/survey",
        element: <Survey></Survey>,
       },
       {
        path: "/survey/:id",
        element: <SurveyDetails></SurveyDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/allSurvey/${params.id}`)
       },
       {
        path: "/payment",
        element: <PayMent></PayMent>,
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
          path:"createsurvey",
          element:<CreateSurvey></CreateSurvey>
        },
        {
          path:"status",
          element:<Status></Status>,
      loader:() => fetch('http://localhost:5000/survey'),

        },
      ]
    }

])