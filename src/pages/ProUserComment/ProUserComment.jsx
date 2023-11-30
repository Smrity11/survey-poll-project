import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const ProUserComment = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: surveyDatasResponse = [] } = useQuery({
      queryKey: ["AlldataResponse"],
      queryFn: async () => {
        const res = await axiosSecure.get("/commentDetails");
        return res.data;
      },
    });

    const filterByEmail = surveyDatasResponse.filter(surveyEmail => surveyEmail.creatorEmail === user.email)

    return (
        <div className=" bg-black" >
        <div
          className=" "
         
        >
        {/* bg-black bg-opacity-[0.8] z-10 */}
          <div className="  w-full  text-white">
            <SectionTitle heading="User Comments"></SectionTitle>
  
            <div className="flex justify-evenly my-4">
              
            </div>
            <div className="overflow-x-auto ">
              <table className="table ">
                {/* head */}
                <thead>
                  <tr className="text-white">
                    <th></th>
                    <th>Email</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Comment</th>
                   
                  </tr>
                </thead>
                <tbody>
                {
                    filterByEmail.map((surveys,index) =>
             <tr key={surveys._id}>
        <th>{index + 1}</th>
         <td>{surveys.responseUserEmail}</td>
         <td>{surveys.category}</td>
         <td>{surveys.title}</td>
         <td>{surveys.comment}</td>
        
      
       </tr>
       )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProUserComment;