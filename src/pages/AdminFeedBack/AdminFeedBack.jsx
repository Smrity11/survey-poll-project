

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const AdminFeedBack = () => {
    // const axiosSecure = useAxiosSecure();
    const feedBackData =useLoaderData()

    // const { data: payments = [] } = useQuery({
    //     queryKey: ['payments'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/payments')
    //         return res.data;
    //     }
    // })

  return (
    <div className=" h-screen relative">
    <div className="h-screen "
    style={{
      backgroundImage:
        "url(https://media.istockphoto.com/id/1249955438/photo/check-mark-symbol-drawn-by-purple-neon-light-on-black-wall.jpg?s=612x612&w=0&k=20&c=Pk0TUB5q-25iidBP7CbmA4CXgCQz9i0MWiOQnNjJj5g=)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% ",
    }}>
      <div className="bg-black bg-opacity-[0.8] z-10 absolute w-full h-screen text-white">
      <SectionTitle heading="Admin Feedback "></SectionTitle>
        <h2 className="text3-xl">Total Payments:{feedBackData.length}</h2>
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
                feedBackData.map((feedback, index) => (
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
