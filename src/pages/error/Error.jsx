import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="lg:flex flex-col justify-center gap-1  py-10 bg-white">
      <div className="">
        <img
          className="w-[80%] mx-auto"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg"
          alt=""
        />
      </div>
      <div className=" text-center ">
        <p className="">page not found</p>
        <Link className="underline text-purple-600" to="/">
          <button className="btn btn-outline btn-info mt-4">Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;