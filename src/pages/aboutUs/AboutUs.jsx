import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
      <>
        <Helmet>
                 <title>OpinioNex | About Us</title>
             </Helmet>

             <div className="font-sans bg-[#1C1C1E]">
      <div className="bg-black text-white pt-28 pb-9 text-center">
      <p className="text-3xl font-bold">About Us</p>
        <h1 className="text-2xl font-bold">Our Survey and Polling Platform</h1>
      </div>

      <section className="max-w-4xl mx-auto mt-8 p-8 bg-[#111113] shadow-md text-white">
        <h2 className="text-2xl text-secondary">Our Mission</h2>
        <p className=" leading-6 mt-4">
          At Your Survey and Polling Platform, we are dedicated to providing a seamless and effective way for individuals and organizations to gather valuable insights through surveys and polls. Our mission is to empower you with the tools to make informed decisions and drive positive change.
        </p>

        <h2 className="text-2xl text-secondary mt-6">What Sets Us Apart</h2>
        <p className=" leading-6 mt-4">
          Our platform is designed with simplicity and functionality in mind. We believe in the power of data-driven decision-making, and we strive to make the process of creating and conducting surveys as easy and efficient as possible. Heres what sets us apart:
        </p>
        <ul className="list-disc list-inside  mt-4">
          <li><strong>User-Friendly Interface:</strong> Our intuitive interface makes it easy for anyone to create and manage surveys, whether youre a seasoned researcher or a first-time user.</li>
          <li><strong>Robust Features:</strong> From customizable survey designs to advanced analytics, we offer a comprehensive set of features to meet a variety of survey needs.</li>
          <li><strong>Data Security:</strong> We prioritize the security and privacy of your data. Our platform employs the latest encryption and security measures to ensure the confidentiality of your survey responses.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mt-8 p-8 bg-[#111113] shadow-md text-white">
        <h2 className="text-2xl text-secondary">Our Values</h2>
        <div className="flex justify-center mt-4 gap-6">
          <div className="w-1/3">
            <h3 className="text-xl font-bold text-secondary">User-Centric</h3>
            <p className="">We put our users at the center of everything we do. Your feedback and experience guide our development and improvements.</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl font-bold text-secondary">Innovation</h3>
            <p className="">We embrace innovation to stay at the forefront of survey technology. We are committed to continually improving our platform to meet evolving user needs.</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl font-bold text-secondary">Transparency</h3>
            <p className="">We believe in transparency in both our processes and policies. You can trust us to handle your data responsibly and ethically.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-8 p-8 py-20 bg-[#111113] shadow-md text-white">
        <h2 className="text-2xl text-secondary">Join Our Community</h2>
        <p className=" mt-4">Become a part of our growing community! Connect with us on social media, participate in discussions, and stay updated on the latest features and updates.</p>
      </section>

      <footer className="bg-secondary text-white text-center py-4 fixed bottom-0 w-full">
        <p>Thank you for choosing Your Survey and Polling Platform. We look forward to helping you gather insights and make informed decisions. Lets create a better future together!</p>
      </footer>
    </div>
      </>
    );
};

export default AboutUs;