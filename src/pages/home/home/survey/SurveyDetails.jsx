import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";

const SurveyDetails = () => {
  const {user} =useAuth()
  const DetailsData = useLoaderData();
  const {_id ,title,category,description,deadline,name,email} =DetailsData
  const axiosSecure =useAxiosSecure()
  const [like, setLike] = useState(DetailsData.like);
  const [dislike, setDislike] = useState(DetailsData.dislike);
  const [selectedOption, setSelectedOption] = useState('yes');
 
  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
        const res = await axiosSecure.get('/payments')
        return res.data;
    }
})

  const filteredproUser = payments.filter(PayUser => PayUser.email === user.email);
  console.log(filteredproUser);


  

  const handleOptionChange = (option) => {
    setSelectedOption(option);
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
      comment,like,dislike,
      vote:selectedOption,
     surveyPostedId :_id,
     surveyPostedName :name,
     surveyPostedEmail : email,
     category,deadline,
     responseUserName: user.name,
     responseUserEmail: user.email
    }
    try {
          const menuRes = await axiosSecure.post('/responseSurveyor', likeCommentData);
      
          if (menuRes.data.insertedId) {
            // show success popup
            // reset();
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
      <div className="static md:grid grid-cols-3 justify-center items-center ">
        <div className="">
          <img src="https://i.ibb.co/r5qL5ph/Survey-or-Poll-What-s-the-Difference-750x375-removebg-preview.png"></img>
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
        <input
          type="radio"
          name="radio-2"
          className="radio radio-primary"
          checked={selectedOption === 'yes'}
          onChange={() => handleOptionChange('yes')}
        />
        <span>Yes</span>
      </li>
      <li>
        <input
          type="radio"
          name="radio-2"
          className="radio radio-primary"
          checked={selectedOption === 'no'}
          onChange={() => handleOptionChange('no')}
        />
        <span>No</span>
      </li>
      <div>
        {selectedOption === 'yes' && <p>Yes selected</p>}
        {selectedOption === 'no' && <p>No selected</p>}
      </div>
    </div>
                </div>

                
              </div>

          
            {
              filteredproUser &&
              <div className="card  bg-base-100 shadow-xl border-2 rounded-none">
          <form onSubmit={handleComment}>
          <div className="card-body">
            <input type="text" name="comment" className="textarea textarea-primary" placeholder="Bio"></input>
            <input
            type="submit"
            value="Comment"
            className="btn btn-wide md:w-[150px] font-extrabold mx-auto grid justify-center"
          ></input>
            </div>
          </form >
          </div>
             }
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
