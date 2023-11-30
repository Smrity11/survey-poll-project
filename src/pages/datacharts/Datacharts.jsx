import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend } from "recharts";
import useAuth from "../../hooks/useAuth";

const Datachart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: surveyData = [] } = useQuery({
    queryKey: ["Alldata"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allSurvey");
      return res.data;
    },
  });

  const filterPublished = surveyData.filter((survData) => survData.status === "published");
  const filterEmail = filterPublished.filter((survData) => survData.email === user.email);

  // Assuming you have a 'categories' array in each survey item
  const categories = Array.from(new Set(filterEmail.flatMap((survey) => survey.category)));

  const data = categories.map((category) => ({
    category,
    YesvoteRange: getVoteRange(filterEmail, category).YesvoteRange,
    NovoteRange: getVoteRange(filterEmail, category).NovoteRange,
  }));

  return (
    <div className="grid items-center justify-center p-4 md:p-20">
      <BarChart width={window.innerWidth > 600 ? 600 : window.innerWidth - 20} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="YesvoteRange" fill="#8884d8" />
        <Bar dataKey="NovoteRange" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

// Helper function to get the vote range for a specific category
const getVoteRange = (surveys, category) => {
  const filteredSurveys = surveys.filter((survey) => survey.category.includes(category));
  const totalVotes = filteredSurveys.reduce((sum, survey) => sum + survey.voteYes, 0);
  const totalVotesNo = filteredSurveys.reduce((sum, survey) => sum + survey.voteNo, 0);
  return { YesvoteRange: totalVotes, NovoteRange: totalVotesNo };
};

export default Datachart;
