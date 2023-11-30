import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt  } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const ManageUsers = () => {

    
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });


  const handleMakeAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
 }

  const handleMakeSurveyor = user =>{
    axiosSecure.patch(`/users/surveyor/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Surveyor Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}
  

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-[black] pb-20 h-full">
      <div
        className="h-auto"
      
      >
        <div className="">
        <div className=""></div>
          <div className=" w-full bg-black   text-white">
          <SectionTitle heading="Manage Users"></SectionTitle>

          <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">Total Users: {users.length}</h2>
            
          </div>
          <div className="overflow-x-auto ">
            <table className="table  w-full">
              {/* head */}
              <thead>
                <tr className="text-white">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>


                    {user.role === 'admin' ? (
          <span className="font-bold text-primary">Admin</span>
        ) : user.role === 'surveyor'  ? (
          <span className="font-bold text-error">Surveyor</span>
        ) : (
          <>
            <button  className="btn btn-ghost btn-xs" onClick={() => handleMakeAdmin(user)}>
             Make Admin
            </button>
            <button className="btn btn-error btn-xs " onClick={() => handleMakeSurveyor(user)} >   Make Surveyor</button>
          </>
        )}

       
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
