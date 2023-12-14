import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";


const AllSurveyCard = () => {
  const axiosPublic = useAxiosPublic();
  const [loading ,setLoading] =useState(true)
  let [color, setColor] = useState("#d500f9");

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])

  const { data: surveysortingData = [] } = useQuery({
    queryKey: ["Alldata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/sortedByVote");
      return res.data;
    },
  });
  console.log(surveysortingData);

  const surveyData = surveysortingData.filter(survData => survData.status === "published");

  return (
    <div className="bg-[#1C1C1E] px-8 md:px-16 lg:px-24 py-40">

<div className="mb-24">
<SectionTitle  heading="All survey"></SectionTitle>

</div> {
    loading?
    <ClipLoader
        color={color}
        loading={loading}
       
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12">
        {surveyData.map((survey) => (
          <div key={survey._id}>
            <div
              className="card bg-[#411564] text-neutral-content shadow-[#411564] shadow-md"
            >
              <div className="card-body items-center text-center text-white">
                <h2 className="card-title text-2xl">{survey?.category}</h2>
                <p className="text-lg">{survey?.title}</p>
                <div className="border-t-2 gap-10 flex justify-between">
                  <div className="flex justify-center items-center my-3">
                  <div className="text-2xl"><AiFillLike></AiFillLike>  </div>
                  <div className="text-xl font-bold">:  {survey?.like}</div>
                  </div>
                  <div className="flex justify-center items-center my-3">
                  <div className="text-2xl"><AiFillDislike></AiFillDislike>  </div>
                  <div className="text-xl font-bold">: {survey?.dislike}</div>
                  </div>
                </div>
                <div className="w-[50px] mx-auto bg-white h-1"></div>
                <p className="my-3">{survey?.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/survey/${survey._id}`}>
                    <button
                      className="bg-[#1C1C1E]  btnsurvey p-2 rounded font-semibold w-[150px] text-white"
                    >
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
}
     
    </div>
  );
};

export default AllSurveyCard;
