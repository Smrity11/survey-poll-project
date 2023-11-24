/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate} from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../provider/AuthProvider";
// import css from "./Login.css"


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
   
  const {signIn,googleSignIn } = useContext(AuthContext)
  const HandleLogin = (e) => {
    
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const email =form.get("email")
    const password =form.get("password")
    

    signIn(email,password)
    .then((result) => {
      // Signed up 
      const user = result.user;
      console.log(user);
      
      navigate(location?.state ? location.state : '/');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      swal("Failed", "Login Failed", "error");

    })
    }
    const handleGoogleSignIn= () =>{
        googleSignIn()
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate(location?.state ? location.state : '/');
         
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        })
    }
  return (



    <div style={{
        backgroundImage: 'url(https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg)',
        backgroundRepeat: 'no-repeat',
       
        // Background color with opacity
    }} className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
                <img src='' alt="" />
            </div>
            <div className="card flex-shrink-0 w-full  shadow-2xl text-white">
                <div className="card-body text-white" >
                    <h1 className="text-3xl text-center font-bold ">Login</h1>
                    <form onSubmit={HandleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter your email" className="input input-bordered inputbox" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered inputbox" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control"> <button className=" text-white border py-1 rounded ">Login</button></div>
                       
                    </form>
                    <div className="form-control">
                           
                            <button onClick={handleGoogleSignIn} className="btn border-blue-600 mt-4"><span ><FaGoogle ></FaGoogle></span> Login with google</button>
                        </div>
                    <p className='my-4 text-center'>New to this website? <Link className='text-purple-400 font-bold' to="/register">Sign Up</Link></p>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default Login
