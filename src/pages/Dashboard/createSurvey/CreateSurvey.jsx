import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const CreateSurvey = () => {
    const { user } = useAuth()
    const [selectedCategory, setSelectedCategory] = useState('');
    const axiosSecure= useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
  
    const [voteYes] =useState(0)
    const [voteNo] =useState(0)
    const [like] =useState(0)
    const [dislike] =useState(0)
  
    const onSubmit = async (data) => {
      const surveyData = {
        email: data.email,
        category: data.category,
        title: data.title,
        deadline: data.deadline,
        description: data.description ,
        voteYes,voteNo,like,dislike,
        status:'unpublish'

      };
    
      try {
        const menuRes = await axiosSecure.post('/survey', surveyData);
    
        if (menuRes.data.insertedId) {
          // show success popup
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.title} is added to the menu.`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        console.error('Error posting survey:', error);
        // Handle error as needed
      }
    };


    const categories = ["Social Issues and Advocacy","Entertainment and Media","Technology and Innovation","Politics and Public Opinion","Health and Wellness","Education and Training"];
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
    };
    return (
     <div className=" h-screen relative" style={{
        backgroundImage: 'url(https://media.istockphoto.com/id/1249955438/photo/check-mark-symbol-drawn-by-purple-neon-light-on-black-wall.jpg?s=612x612&w=0&k=20&c=Pk0TUB5q-25iidBP7CbmA4CXgCQz9i0MWiOQnNjJj5g=)',
        backgroundRepeat: 'no-repeat',
        backgroundSize:"100% "}}>
       <div className=" lg:px-40 bg-black bg-opacity-[0.8] z-10 absolute w-full h-screen">
       <SectionTitle heading="Create Survey"></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-7 mb-6 ">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-white text-xl">Email</span>
              </label>
              <label className="input-group">
                <input
                  {...register('email', { required: true })}
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
            <div className="container mx-auto mt-8">
        <label className="block text-white text-sm font-bold " htmlFor="category">
          Select a job category:
        </label>
        <select
          id="category"
          {...register('category', { required: true })}
          className="border rounded px-4 py-2 w-full"
          onChange={handleCategoryChange}
          value={selectedCategory}
          required
        >
          <option className="text-gray-700" value="" disabled>Select a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {selectedCategory && <p className="mt-2 text-green-500">You selected: {selectedCategory}</p>}
      </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-xl">Tittle</span>
              </label>
              <label className="input-group">
                <input
                  {...register('title', { required: true })}
                  type="text"
                  placeholder="enter title"
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
            

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white text-xl">Expire Date</span>
              </label>
              <label className="input-group">
                <input
                 {...register('deadline', { required: true })}
                  type="date"
                  placeholder="enter date"
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>

            <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-white text-xl">Description</span>
            </label>
            <label className="input-group">
              <input
              {...register('description', { required: true })}
              
                type="text"
                placeholder="description"
                className="input input-bordered w-full inputbox"
              />
            </label>
          </div>
          </div>
  
          
          
          <input
            type="submit"
            value="Add Survey"
            className="btn btn-wide md:w-[500px] font-extrabold mx-auto grid justify-center"
          ></input>
        </form>
      </div>
     </div>
    );
};

export default CreateSurvey;