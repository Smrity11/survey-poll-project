

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";


const UserResponse = () => {
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
    const filtercategory1 = filterByEmail.filter(survData => survData.category === "Politics and Public Opinion");
    const filtercategory2 = filterByEmail.filter(survData => survData.category === "Education and Training");
    const filtercategory3 = filterByEmail.filter(survData => survData.category === "Health and Wellness");
    const filtercategory4 = filterByEmail.filter(survData => survData.category === "Technology and Innovation");
    const filtercategory5 = filterByEmail.filter(survData => survData.category === "Social Issues and Advocacy");
    const filtercategory6 = filterByEmail.filter(survData => survData.category === "Entertainment and Media");


    return (

        <div className="bg-black pb-20">
            <SectionTitle  heading="User Response"></SectionTitle>
            <div >
            <div className="overflow-x-auto">
            <h1 className="text-xl text-white text-center  my-20">Politics and Public Opinion</h1>
  <table className="table table-sm text-white">
    <thead>
      <tr className="text-white">
        <th></th> 
        <th>Category</th> 
        <th>User Email</th> 
        <th>Vote(yes)</th> 
        <th>Vote(no)</th> 
        <th>Like</th> 
        <th>Dislike</th>
      </tr>
    </thead> 
    <tbody>
    { filtercategory1 &&
        filtercategory1.map((survey, index) => (
                  <tr key={survey._id}>
                    <th>{index + 1}</th>
                    <td>{survey.category}</td>
                    <td>{survey.responseUserEmail}</td>
                    <td>{survey.voteYes}</td>
                    <td>{survey.voteNo}</td>
                    <td>{survey.like}</td>
                    <td>{survey.dislike}</td>
                  </tr>
                ))}
  
      
    </tbody> 

  </table>
</div>
            <div className="overflow-x-auto">
            <h1 className="text-xl text-white text-center  my-20">Education and Training</h1>
  <table className="table table-sm text-white">
    <thead>
      <tr className="text-white">
      <th></th> 
        <th>Category</th> 
        <th>User Email</th> 
        <th>Vote(yes)</th> 
        <th>Vote(no)</th> 
        <th>Like</th> 
        <th>Dislike</th>
      
      </tr>
    </thead> 
    <tbody>
    { filtercategory2 &&
        filtercategory2.map((survey, index) => (
            <tr key={survey._id}>
                    <th>{index + 1}</th>
                    <td>{survey.category}</td>
                    <td>{survey.responseUserEmail}</td>
                    <td>{survey.voteYes}</td>
                    <td>{survey.voteNo}</td>
                    <td>{survey.like}</td>
                    <td>{survey.dislike}</td>
                  </tr>
                ))}
  
      
    </tbody> 

  </table>
</div>
            <div className="overflow-x-auto">
            <h1 className="text-xl text-white text-center  my-20">Health and Wellness</h1>
  <table className="table table-sm text-white">
    <thead>
      <tr className="text-white">
      <th></th> 
        <th>Category</th> 
        <th>User Email</th> 
        <th>Vote(yes)</th> 
        <th>Vote(no)</th> 
        <th>Like</th> 
        <th>Dislike</th>
      </tr>
    </thead> 
    <tbody>
    { filtercategory3 &&
        filtercategory3.map((survey, index) => (
            <tr key={survey._id}>
                    <th>{index + 1}</th>
                    <td>{survey.category}</td>
                    <td>{survey.responseUserEmail}</td>
                    <td>{survey.voteYes}</td>
                    <td>{survey.voteNo}</td>
                    <td>{survey.like}</td>
                    <td>{survey.dislike}</td>
                  </tr>
                ))}
  
      
    </tbody> 

  </table>
</div>
            <div className="overflow-x-auto">
            <h1 className="text-xl text-white text-center  my-20">Technology and Innovation</h1>
  <table className="table table-sm text-white">
    <thead>
      <tr className="text-white">
      <th></th> 
        <th>Category</th> 
        <th>User Email</th> 
        <th>Vote(yes)</th> 
        <th>Vote(no)</th> 
        <th>Like</th> 
        <th>Dislike</th>
      </tr>
    </thead> 
    <tbody>
    { filtercategory4 &&
        filtercategory4.map((survey, index) => (
            <tr key={survey._id}>
                    <th>{index + 1}</th>
                    <td>{survey.category}</td>
                    <td>{survey.responseUserEmail}</td>
                    <td>{survey.voteYes}</td>
                    <td>{survey.voteNo}</td>
                    <td>{survey.like}</td>
                    <td>{survey.dislike}</td>
                  </tr>
                ))}
  
      
    </tbody> 

  </table>
</div>
            <div className="overflow-x-auto">
            <h1 className="text-xl text-white text-center  my-20">Social Issues and Advocacy</h1>
  <table className="table table-sm text-white">
    <thead>
      <tr className="text-white">
      <th></th> 
        <th>Category</th> 
        <th>User Email</th> 
        <th>Vote(yes)</th> 
        <th>Vote(no)</th> 
        <th>Like</th> 
        <th>Dislike</th>
      </tr>
    </thead> 
    <tbody>
    { filtercategory5 &&
        filtercategory5.map((survey, index) => (
            <tr key={survey._id}>
                    <th>{index + 1}</th>
                    <td>{survey.category}</td>
                    <td>{survey.responseUserEmail}</td>
                    <td>{survey.voteYes}</td>
                    <td>{survey.voteNo}</td>
                    <td>{survey.like}</td>
                    <td>{survey.dislike}</td>
                  </tr>
                ))}
  
      
    </tbody> 

  </table>
</div>
            <div className="overflow-x-auto">
            <h1 className="text-xl text-white text-center  my-20">Entertainment and Media</h1>
  <table className="table table-sm text-white">
    <thead>
      <tr className="text-white">
      <th></th> 
        <th>Category</th> 
        <th>User Email</th> 
        <th>Vote(yes)</th> 
        <th>Vote(no)</th> 
        <th>Like</th> 
        <th>Dislike</th>
      </tr>
    </thead> 
    <tbody>
    { filtercategory6 &&
        filtercategory6.map((survey, index) => (
            <tr key={survey._id}>
                    <th>{index + 1}</th>
                    <td>{survey.category}</td>
                    <td>{survey.responseUserEmail}</td>
                    <td>{survey.voteYes}</td>
                    <td>{survey.voteNo}</td>
                    <td>{survey.like}</td>
                    <td>{survey.dislike}</td>
                  </tr>
                ))}
  
      
    </tbody> 

  </table>
</div>
        </div>
        </div>
       
    );
};

export default UserResponse;