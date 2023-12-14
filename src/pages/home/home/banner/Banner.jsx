import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="">

<div>
<div className="space-y-6 p-8 lg:px-3 absolute text-white md:w-2/5 mt-44 md:ml-10">
<h1 className="text-4xl font-bold ">OpinioHub - Your Voice Matters</h1>
<p className=" ">OpinioHub is a dynamic survey and poll website designed to amplify your voice in diverse domains.Your go-to platform for quick, impactful surveys. Voice your opinions effortlessly and shape the narrative in just a click. Join us and make your mark on the ever-evolving landscape of ideas.</p>
<Link to="/allSurvey" >
<button className=" button text-bold text-fuchsia-500 px-5 py-2 rounded border border-fuchsia-700 mt-9">Explore now</button>
</Link>
  </div>
</div>

<div className="w-full h-[600px]">
<img className="w-full h-[600px]" src="https://i.ibb.co/rwygp3F/violet-purple-line-shape-black-background-vector-35109055-clipdrop-remove-text.jpg"></img>

</div>



      
      </div>
    );
};

export default Banner;