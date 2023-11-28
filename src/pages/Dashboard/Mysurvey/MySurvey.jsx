


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
    <div className="bg-[#1C1C1E] px-8 md:px-10 lg:px-14 py-8">

<div className="mb-24">
<SectionTitle  heading="My Survey"></SectionTitle>


</div>      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12">
        {filterSurvey.map((survey) => (
          <div key={survey._id}>
            <div
              className="card bg-[#411564] text-neutral-content shadow-[#411564] shadow-md"
            >
              <div className="card-body items-center text-center text-white">
              
                <h2 className="card-title text-2xl">{survey?.category}</h2>
                <p className="text-lg">{survey?.title}</p>
                <div className="border-t-2 space-y-3">
                  <p>
                    Maximum Price :{" "}
                    <span className="text-white font-extrabold">
                      {survey?.vote}
                    </span>
                  </p>
                  <p className="mb-6">
                    Deadline :
                    <span className="text-white font-extrabold">
                      {survey?.deadline}
                    </span>{" "}
                  </p>
                </div>
                <div className="w-[50px] mx-auto bg-white h-1"></div>
                <p className="my-3">{survey?.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/dashboard/updateSurvey/${survey._id}`}>
                    <button
                      className="bg-[#1C1C1E] p-2 rounded font-semibold w-[150px] text-white"
                    >
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySurvey;
