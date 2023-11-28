import FaqSection from "../../FaqSection/FaqSection";
import Banner from "../banner/Banner";
import Survey from "../survey/Survey";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Survey></Survey>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;