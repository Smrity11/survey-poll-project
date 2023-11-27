import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SurveyDetails = () => {
  const DetailsData = useLoaderData();
  const axiosSecure =useAxiosSecure()

  const [like ,setLike] = useState(DetailsData.like)
  const [dislike ,setDislike ] = useState('')
  // console.log(DetailsData);
  console.log( like);
  const handleLike= (DetailsData) =>{
    const {_id} = DetailsData
    setLike(like+1)
    
    axiosSecure.put(`/allSurvey/like/${_id}`,  like )
    .then(res => {
        console.log(res);
        // Handle success or show a message to the user
    })
    .catch(err => console.log(err));
    
  }
  const handledislike =() =>{
    const {_id} = DetailsData
    setDislike(dislike+1)
    
    axiosSecure.put(`/allSurvey/dislike/${_id}`,  dislike )
    .then(res => {
        console.log(res);
        // Handle success or show a message to the user
    })
    .catch(err => console.log(err));
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
              <div className="card  bg-base-100 shadow-xl border-2 rounded-bl-3xl">
                <div className="card-body">
                  <h2 className="card-title">{DetailsData.category}</h2>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-xl border-2 rounded-bl-3xl">
                <div className="card-body">
                  <h2 className="card-title">{DetailsData.title}</h2>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-xl border-2 rounded-bl-3xl">
                <div className="card-body">
                  <h2 className="card-title">{DetailsData.timestamp}</h2>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-xl border-2 rounded-bl-3xl">
                <div className="card-body">
                  <h2 className="card-title">{DetailsData.description}</h2>
                </div>
              </div>
            </div>
            <div className=" space-y-4">
              <div className="card  bg-base-100 shadow-xl border-2 rounded-bl-3xl">
                <div className="card-body">

                <div className="card-body">
                    <h1>{DetailsData.question}</h1>
                    <li>
                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary"
                        checked
                      />

                      <span>yes</span>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="radio-2"
                        className="radio radio-primary"
                      />
                      <span>no</span>
                    </li>
                  </div>
                </div>

                
              </div>

              <div className="card  bg-base-100 shadow-xl border-2 rounded-bl-3xl">
                <div className="card-body">
                <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>
                </div>
              </div>
              <div className="card  bg-base-100 shadow-xl border-2 rounded-bl-3xl">
                <div className="card-body">
                  <button onClick={() => handleLike(DetailsData)} className="card-title btn">like : {like}</button>
                  <button onClick={handledislike} className="card-title btn">Dislike : {DetailsData.dislike}</button>
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
