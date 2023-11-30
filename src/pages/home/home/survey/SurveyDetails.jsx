import {  useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { FaRegComment } from "react-icons/fa";

const SurveyDetails = () => {
  const {user} =useAuth()
  const DetailsData = useLoaderData();
  const {title,category,description,deadline,_id,email} = DetailsData
  const axiosSecure =useAxiosSecure()
const axiosPublic = useAxiosPublic();

  const [like, setLike] = useState(DetailsData.like);
  const [dislike, setDislike] = useState(DetailsData.dislike);
  const [selectedOptionYes, setSelectedOptionYes] = useState(DetailsData.voteYes);
  const [selectedOptionNo, setSelectedOptionNo] = useState(DetailsData.voteNo);
  console.log(selectedOptionNo);
 
  const {  data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
        const res = await axiosSecure.get('/payments')
        return res.data;
    }
})


const {refetch, data: surveyComment = [] } = useQuery({
  queryKey: ["commentdata"],
  queryFn: async () => {
    const res = await axiosPublic.get("/commentDetails");
    return res.data;
  },
});

  const filteredproUseremail = payments.filter(PayUser => PayUser.email === user.email);
  
  

  const filteredproUser = filteredproUseremail.filter(PayUser => PayUser.role === 'pro user');
  console.log("pay user",filteredproUser);
  const filteredCategory = surveyComment.filter(nameCategory => nameCategory.creatorId === _id);
 


  
  const handleYesVote = (_id, currentyesCount) => {
    const updateyesCount = currentyesCount + 1;
    axiosSecure.patch(`/allSurvey/YesVote/${_id}`, { voteYes: updateyesCount })
      .then(res => {
        console.log(res);
        setSelectedOptionYes(updateyesCount);
      })
      .catch(err => console.log(err));
  }
  


  const handleNoVote = (_id, currentNoCount) => {
    const updateNoVoteCount = currentNoCount + 1;

    axiosSecure.patch(`/allSurvey/NoVote/${_id}`, { voteNo: updateNoVoteCount })
      .then(res => {
        console.log(res);
        setSelectedOptionNo(updateNoVoteCount);
      })
      .catch(err => console.log(err));
  };


  const handleLike= (_id , currentLikeCount) =>{
   
   const updateLikeCount = currentLikeCount +1
    
    axiosSecure.patch(`/allSurvey/like/${_id}`,  {like:updateLikeCount} )
    .then(res => {
        console.log(res);
        setLike(updateLikeCount)

    })
    .catch(err => console.log(err));
  }


  
  const handleDislike =(_id , currentDisLikeCount) =>{

    const updateDisLikeCount = currentDisLikeCount + 1
    
    axiosSecure.patch(`/allSurvey/dislike/${_id}`,  {dislike : updateDisLikeCount} )
    .then(res => {
        console.log(res);
        setDislike(updateDisLikeCount)
    })
    .catch(err => console.log(err));
  }

  const handleComment = async (e)=>{
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value
    const likeCommentData ={
      comment,
     responseUserName: user.name,
     responseUserEmail: user.email,
     responseUserPhoto: user.photoURL,
     creatorId:_id,
     creatorEmail:email,
     voteYes:selectedOptionYes,
     voteNo:selectedOptionNo,
     like:like,
     dislike:dislike,
     category:category,
     role: 'pro user',

    }
    try {
          const commentUpdate = await axiosSecure.post("/responseDetails", likeCommentData);
      
          if (commentUpdate.data.insertedId) {
            // show success popup
            // reset();
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `your comment added .`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        } catch (error) {
          console.error('Error posting survey:', error);
          // Handle error as needed
        }

  }


  return (
    <div className="bg-[#1C1C1E]">
      <div className="pt-24 pb-10">
        <SectionTitle heading="SurveyDetails"></SectionTitle>
      </div>
      <div className="static md:grid grid-cols-3 justify-center  ">
        <div className="text-white ">
        <h1 className="text-xl my-8 text-fuchsia-600 pl-6 inline">All Comments :</h1>
       { filteredCategory.map((comments,index) => 
        <div className="flex gap-8 my-3 ml-7 pl-7" key={index.id}>
        <div>
        <div className="avatar">
  <div className="w-16 rounded">
    <img src={comments.responseUserPhoto} alt="Photo" />
  </div>
</div>
        </div>
         <div className="">
         <p className="text-xl">Name : {comments.name}</p>
          <p className="text-lg">Email : {comments.responseUserEmail}</p>
          <div className="flex items-center">
                  <div className="text-sm"><FaRegComment></FaRegComment> </div>
                  <div className="text-sm font-bold"> : {comments.comment}</div>
                  </div>
         </div>
        </div>)
        
       }
        </div>
        <div className="col-span-2 py-10">
          
          <div className="static md:flex gap-9 items-center justify-center">
            <div className=" space-y-4">
              <div className="card  bg-base-100 shadow-xl border-2 rounded-none">
                <div className="card-body">
                <h1 className="text-lg font-bold ">Category : </h1>
                  <h2 className="card-title">{category}</h2>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-xl border-2 rounded-none">
                <div className="card-body">
                <h1 className="text-lg font-bold ">Title : </h1>
                  <h2 className="card-title">{title}</h2>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-xl border-2 rounded-none">
                <div className="card-body">
                <h1 className="text-lg font-bold ">Deadline : </h1>
                  <h2 className="card-title">{deadline}</h2>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-xl border-2 rounded-none">
                <div className="card-body">
                <h1 className="text-lg font-bold ">Description : </h1>
                  <h2 className="card-title">{description}</h2>
                </div>
              </div>
            </div>
            <div className=" space-y-4">
              <div className="card  bg-base-100 shadow-xl border-2 rounded-none">
                <div className="card-body">

                <div className="card-body rounded-none">
      <h1>{DetailsData.question}</h1>
      <li>
      <button onClick={() => handleYesVote(DetailsData._id ,DetailsData.voteYes)} className="card-title btn"> Yes {selectedOptionYes}</button>
      </li>
      <li>
       
      <button onClick={() => handleNoVote(DetailsData._id, DetailsData.voteNo)} className="card-title btn">
      No {selectedOptionNo}
    </button>
      </li>
      <div>
        {/* {selectedOption === 'yes' && <p>Yes selected</p>}
        {selectedOption === 'no' && <p>No selected</p>} */}
      </div>
    </div>
                </div>

                
              </div>

          
            
              
              <div className="card  bg-base-100 shadow-xl border-2 rounded-none">
              <form onSubmit={handleComment}>
  <div className="card-body">
    {filteredproUser.length > 0 ? (
      <>
    <input  type="text" name="comment" className="textarea textarea-primary" placeholder="enter your comment" />
    <input
        type="submit"
        value="Comment"
        className="btn btn-wide md:w-[150px] font-extrabold mx-auto grid justify-center"
      />
      </>
    
    ) : (
      <>
        <p className="text-xs text-black">
          Only pro user can Comment. If you want to be a pro user you have to pay
        </p> 

      </>
    )}
  </div>
</form>;
          </div>
            
              <div className="card  bg-base-100 shadow-xl border-2 rounded-none">
                <div className="card-body">
                  <button onClick={() => handleLike(DetailsData._id ,DetailsData.like)} className="card-title btn"> Like: {like}</button>
                  <button onClick={() => handleDislike(DetailsData._id, DetailsData.dislike)} className="card-title btn">
                  Dislike: {dislike}
</button>
                </div>
              </div>

            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails;
