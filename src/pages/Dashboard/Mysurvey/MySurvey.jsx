


import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";


const MySurvey = () => {
    const {user} = useAuth()
  const axiosPublic = useAxiosPublic();
  const { data: surveyData = [] } = useQuery({
    queryKey: ["Alldata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allSurvey");
      return res.data;
    },
  });

  // Display only the first six surveys
  const filterSurvey = surveyData.filter(survData => survData.email === user.email);
 console.log(filterSurvey);

  return (
    <div className="bg-black pb-20 h-full">
    <div className="bg-black "
    >
      <div className="bg-black  w-full text-white">
      <SectionTitle heading="my survey"></SectionTitle>
      
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
      <tr className="text-white">
        <th></th> 
        <th>Category</th> 
        <th>Title</th> 
        <th>Question</th> 
        <th>Description</th> 
        <th>Deadline</th>
        <th>Update</th>
      </tr>
    </thead> 
    <tbody>
   
     { filterSurvey.map((survey, index) => (
                  <tr key={survey._id}>
                    <th>{index + 1}</th>
                    <td>{survey.category}</td>
                    <td>${survey.title}</td>
                    <td>{survey.question}</td>
                    <td>{survey.description}</td>
                    <td>{survey.deadline}</td>
                    <td><Link className="px-4 py-[3px] border border-violet-700" to={`/dashboard/updateSurvey/${survey._id}`}>Update</Link></td>
                  </tr>
                ))
     }
  
      
    </tbody> 
          </table>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default MySurvey;
