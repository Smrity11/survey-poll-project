import FaqSection from "../../FaqSection/FaqSection";
import Testimonials from "../../Testimonials/Testimonials";
// import FeaturedSurvey from "../../FeaturedSurveys/FeaturedSurvey";
import Banner from "../banner/Banner";
import Survey from "../survey/Survey";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Survey></Survey>
            {/* <FeaturedSurvey></FeaturedSurvey> */}
            <Testimonials></Testimonials>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;