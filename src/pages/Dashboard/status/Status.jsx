

import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Status = () => {


    const axiosSecure = useAxiosSecure();
    const { data: surveyData = [], refetch } = useQuery({
      queryKey: ["Alldata"],
      queryFn: async () => {
        const res = await axiosSecure.get("/allSurvey");
        return res.data;
      },
    });

    const surveyUnpublished = (surveys) => {
      const { _id } = surveys;
  
      Swal.fire({
          title: "Enter your feedback",
          input: "text",
          inputPlaceholder: "Type your feedback here...",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, unpublish it!",
          preConfirm: (message) => {
              if (!message) {
                  console.log('Feedback message cannot be empty');
              }
              return message;
          }
      }).then((result) => {
          const feedbackMessage = result.value;
  
          if (result.isConfirmed) {
              // Assuming refetch is a function to refresh data, make sure it's defined
              refetch();
              console.log('Submit feedback confirmed');
  
              const feedbackData = {
                  typeMessage: feedbackMessage
              };
  
              axiosSecure.put(`/survey/unpublish/${_id}`, feedbackData)
                  .then(res => {
                      console.log(res);
                      // Handle success or show a message to the user
                  })
                  .catch(err => console.log(err));
          }
      }).catch(err => console.log(err));
  }
  



    const surveypublished = surveys => {
      const { _id } = surveys
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, publish it!",
    
      }).then((result) =>{
        
        if(result.isConfirmed){
          refetch()
          console.log('published confirm')
        }
        const publishedSyrvey ={
          status:'published'
        }
        axiosSecure.put(`/survey/published/${_id}` , publishedSyrvey)
        .then(res => 
          console.log(res))
      }).catch(err => console.log(err))
    }

    return (
        <div className=" h-screen relative">
        <div
          className="h-screen "
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1249955438/photo/check-mark-symbol-drawn-by-purple-neon-light-on-black-wall.jpg?s=612x612&w=0&k=20&c=Pk0TUB5q-25iidBP7CbmA4CXgCQz9i0MWiOQnNjJj5g=)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% ",
          }}
        >
          <div className="bg-black bg-opacity-[0.8] z-10 absolute w-full h-screen text-white">
            <SectionTitle heading="Manage status"></SectionTitle>
  
            <div className="flex justify-evenly my-4">
              <h2 className="text-3xl">All Users</h2>
              <h2 className="text-3xl">Total Users: {surveyData.length}</h2>
            </div>
            <div className="overflow-x-auto ">
              <table className="table ">
                {/* head */}
                <thead>
                  <tr className="text-white">
                    <th></th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Publish</th>
                    <th>Unpublish</th>
                  </tr>
                </thead>
                <tbody>
                {
                  surveyData.map((surveys,index) =>
             <tr key={surveys._id}>
        <th>{index + 1}</th>
         <td>{surveys.category}</td>
         <td>{surveys.title}</td>
        
        {/* <td className="btn" onClick={() =>surveypublished(surveys)}>publish</td>
         <td className="btn" onClick={() =>surveyUnpublished(surveys)}>unpublish</td> */}
         {surveys.status === 'unpublished' ? (
          <span className="btn btn-ghost btn-xs">Unpublished</span>
        ) : surveys.status === 'published'  ? (
          <span className="btn btn-ghost btn-xs">Published</span>
        ) : (
          <>
          <td className="btn btn-ghost btn-xs" onClick={() =>surveypublished(surveys)}>publish</td>
          <td className="btn btn-ghost btn-xs" onClick={() =>surveyUnpublished(surveys)}>unpublish</td>
          </>
        )}
       </tr>
       )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



//         <div className=" h-screen relative">
//         <div
//           className="h-screen "
//           style={{
//             backgroundImage:
//               "url(https://media.istockphoto.com/id/1249955438/photo/check-mark-symbol-drawn-by-purple-neon-light-on-black-wall.jpg?s=612x612&w=0&k=20&c=Pk0TUB5q-25iidBP7CbmA4CXgCQz9i0MWiOQnNjJj5g=)",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "100% ",
//           }}
//         >
//             <div className="overflow-x-auto">
//   <table className="table table-zebra">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Favorite Color</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       {
//         allSurvey.map((surveys,index) =>
//             <tr key={surveys._id}>
//         <th>{index + 1}</th>
//         <td>{surveys.category}</td>
//         <td>{surveys.title}</td>
//         <td>publish</td>
//         <td>unpublish</td>
//       </tr>
//         )
//       }
      
      
//     </tbody>
//   </table>
// </div>
//         </div>
//         </div>
    );
};

export default Status;