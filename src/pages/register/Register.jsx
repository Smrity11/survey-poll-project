 /* eslint-disable no-unused-vars */

 import { useContext } from "react";
 import { Helmet } from "react-helmet-async";
 import { useForm } from "react-hook-form";

 import { Link, useNavigate } from "react-router-dom";
 import Swal from 'sweetalert2'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

 
 const Register = () => {
     const axiosPublic = useAxiosPublic();
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const { createUser, updateUserProfile } = useContext(AuthContext);
     const navigate = useNavigate();
     const { googleSignIn } = useAuth();
 
     const onSubmit = data => {
 
         createUser(data.email, data.password)
             .then(result => {
                 const loggedUser = result.user;
                 console.log(loggedUser);
                 updateUserProfile(data.name, data.photoURL)
                     .then(() => {
                         // create user entry in the database
                         const userInfo = {
                             name: data.name,
                             email: data.email
                         }
                         axiosPublic.post('/users', userInfo)
                             .then(res => {
                                 if (res.data.insertedId) {
                                     console.log('user added to the database')
                                     reset();
                                     Swal.fire({
                                         position: 'top-end',
                                         icon: 'success',
                                         title: 'User created successfully.',
                                         showConfirmButton: false,
                                         timer: 1500
                                     });
                                     navigate('/');
                                 }
                             })
 
 
                     })
                     .catch(error => console.log(error))
             })
     };
     const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }

 
     return (
         <>
             <Helmet>
                 <title>OpinioNex | Register</title>
             </Helmet>

             <div style={{
            backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20200728/pngtree-abstract-liquid-fluid-gradient-with-abstract-line-background-with-cyan-purple-image_369826.jpg)',
            backgroundRepeat: 'no-repeat',
           
            // Background color with opacity
        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl  text-white">
                    <div className="card-body text-white">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name='name' placeholder="name" className="inputbox input input-bordered text-black" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered inputbox text-black"
                />
              </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" name='email'   {...register("email", { required: true })} placeholder="email" className="inputbox input input-bordered text-black" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input type="text" name='password' {...register("password", {
                                     required: true,
                                     minLength: 6,
                                     maxLength: 20,
                                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                 })} placeholder="password" className="inputbox input input-bordered text-black" />
                                  {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                 {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                 {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                 {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                
                            </div>
                            <div className="flex justify-between items-center">
              <div>
              <input required type="checkbox" /> <span>Accept Term & Conditions</span>
              </div>
              </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-black font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>



            
         </>
     );
 };
 
 export default Register;

















// import { Link, Navigate, useNavigate } from 'react-router-dom';

// import { useContext } from 'react';
// // import css from "./Register.css"
// import swal from 'sweetalert';
// import { AuthContext } from '../../provider/AuthProvider';
// import useAxiosPublic from '../../hooks/useAxiosPublic';

// const Register = () => {
//     const navigate =useNavigate()
//     const { createUser ,updateUserProfile } = useContext(AuthContext);


//     const onSubmit = data => {

//         createUser(data.email, data.password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 updateUserProfile(data.name, data.photoURL)
//                     .then(() => {
//                         // create user entry in the database
//                         const userInfo = {
//                             name: data.name,
//                             email: data.email
//                         }
//                         useAxiosPublic.post('/users', userInfo)
//                             .then(res => {
//                                 if (res.data.insertedId) {
//                                     console.log('user added to the database')
//                                     // reset();
//                                     swal.fire({
//                                         position: 'top-end',
//                                         icon: 'success',
//                                         title: 'User created successfully.',
//                                         showConfirmButton: false,
//                                         timer: 1500
//                                     });
//                                     navigate('/');
//                                 }
//                             })


//                     })
//                     .catch(error => console.log(error))
//             })
//     };

     


//     return (
//         <div style={{
//             backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20200728/pngtree-abstract-liquid-fluid-gradient-with-abstract-line-background-with-cyan-purple-image_369826.jpg)',
//             backgroundRepeat: 'no-repeat',
           
//             // Background color with opacity
//         }} className="hero min-h-screen ">
//             <div className="hero-content flex-col lg:flex-row">
//                 <div className="w-1/2 mr-12">
//                     <img src="" alt="" />
//                 </div>
//                 <div className="card flex-shrink-0 w-full  shadow-2xl  text-white">
//                     <div className="card-body text-white">
//                         <h1 className="text-3xl text-center font-bold">Sign Up</h1>
//                         <form onSubmit={onSubmit}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text text-white">Name</span>
//                                 </label>
//                                 <input type="text" name='name' placeholder="name" className="inputbox input input-bordered" />
//                             </div>
//                             <div className="form-control ">
//                 <label className="label">
//                   <span className="label-text text-white">Photo</span>
//                 </label>
//                 <input
//                   name="photo"
//                   type="text"
//                   placeholder="Enter Your Photo URL"
//                   className="input input-bordered inputbox"
//                 />
//               </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text text-white">Email</span>
//                                 </label>
//                                 <input type="text" name='email' placeholder="email" className="inputbox input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text text-white">Confirm Password</span>
//                                 </label>
//                                 <input type="text" name='password' placeholder="password" className="inputbox input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="flex justify-between items-center">
//               <div>
//               <input required type="checkbox" /> <span>Accept Term & Conditions</span>
//               </div>
//               </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Register" />
//                             </div>
//                         </form>
//                         <p className='my-4 text-center'>Already Have an Account? <Link className='text-purple-400 font-bold' to="/login">Login</Link> </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;