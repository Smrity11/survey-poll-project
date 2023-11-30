

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";

const AdminFeedBack = () => {
  const {user} = useAuth()
    // const axiosSecure = useAxiosSecure();
    const feedBackData =useLoaderData()

    // const { data: payments = [] } = useQuery({
    //     queryKey: ['payments'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/payments')
    //         return res.data;
    //     }
    // })
    const surveyData = feedBackData.filter(survData => survData.email === user.email);

  return (
    <div className="bg-black pb-20 h-full">
    <div className=" "
    >
      <div className="bg-black  w-full text-white">
      <SectionTitle heading="Admin Feedback "></SectionTitle>
      
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>#</th>
                <th>Category</th>
                <th>Title</th>
                <th>Feedback</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                surveyData.map((feedback, index) => (
                  <tr key={feedback._id}>
                    <th>{index + 1}</th>
                    <td>{feedback.category}</td>
                    <td>${feedback.title}</td>
                    <td>{feedback.feedback}</td>
                    <td>{feedback.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AdminFeedBack;
