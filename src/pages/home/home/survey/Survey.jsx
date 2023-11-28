import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";

const Survey = () => {
  const axiosPublic = useAxiosPublic();
  const { data: surveysortingData = [] } = useQuery({
    queryKey: ["Alldata"],
    queryFn: async () => {
      const res = await axiosPublic.get("/sortedByVote");
      return res.data;
    },
  });

  // Display only the first six surveys
  const filterPublished = surveysortingData.filter(survData => survData.status === "published");
  const visibleSurveys = filterPublished.slice(0, 6);

  return (
    <div className="bg-[#1C1C1E] px-8 md:px-24 lg:px-32 py-40">

<div className="mb-24">
<SectionTitle  heading="Most Positive Voted survey"></SectionTitle>

</div>      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-12">
        {visibleSurveys.map((survey) => (
          <div key={survey._id}>
            <div
              className="card bg-[#411564] text-neutral-content shadow-[#411564] shadow-md"
            >
              <div className="card-body items-center text-center text-white">
                <h2 className="card-title text-2xl">{survey?.category}</h2>
                <p className="text-lg">{survey?.title}</p>
                <div className="border-t-2 space-y-3">
                  <p>
                    Yes Vote :{" "}
                    <span className="text-white font-extrabold">
                      {survey?.yesVote}
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
                  <Link to={`/survey/${survey._id}`}>
                    <button
                      className="bg-[#1C1C1E] p-2 rounded font-semibold w-[150px] text-white"
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
    </div>
  );
};

export default Survey;
