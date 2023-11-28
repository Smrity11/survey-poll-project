import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const FaqSection = () => {
    return (
        <>
        <div className="px-8 md:px-18 lg:px-24 bg-[#1C1C1E]">
        <SectionTitle heading="frequently asked questions (FAQs)"></SectionTitle>
    <div className="flex justify-center items-center gap-20 py-14">
        <div className="space-y-4">
        <div className="join join-vertical w-full text-white space-y-4">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    How do I create a survey on your platform?
    </div>
    <div className="collapse-content"> 
      <p>To create a survey, log in to your account and navigate to the dashboard. Click on the Create Survey button, and youll be guided through an intuitive survey builder where you can add questions, customize settings, and design your survey.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What types of questions can I include in my survey?
    </div>
    <div className="collapse-content"> 
      <p>Our platform supports a variety of question types, including multiple-choice, open-ended, rating scales, and more. You can choose the question format that best suits your survey goals.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Is my survey data secure?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we prioritize the security and confidentiality of your survey data. Our platform employs robust security measures, including encryption, to ensure the privacy of your responses.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How do I share my survey with participants?
    </div>
    <div className="collapse-content"> 
      <p>After creating your survey, you can share it easily by generating a unique survey link. Distribute this link via email, social media, or embed it on your website to reach your desired audience.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Can I customize the design of my survey?
    </div>
    <div className="collapse-content"> 
      <p>Absolutely! We understand the importance of branding. Customize the appearance of your survey by choosing colors, fonts, and images that align with your brand or personal style.</p>
    </div>
  </div>
</div>
        </div>
        <div className="">
        <div className="join join-vertical w-full text-white space-y-4">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    How can I analyze the results of my survey?
    </div>
    <div className="collapse-content"> 
      <p>Once your survey has collected responses, you can analyze the results in real-time through our analytics dashboard. View comprehensive reports, charts, and graphs to gain valuable insights from your data.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Is there a limit to the number of participants for my survey?
    </div>
    <div className="collapse-content"> 
      <p>No, there is no participant limit for your surveys. Our platform is scalable and can accommodate surveys of various sizes, from small-scale feedback collection to large-scale research projects.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Can I edit my survey after it has been published?
    </div>
    <div className="collapse-content"> 
      <p>Yes, you can make edits to your survey even after it has been published. However, keep in mind that modifying questions may affect the data already collected.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Do participants need an account to take my survey?
    </div>
    <div className="collapse-content"> 
      <p>yes, participants do not need an account to take your survey. We prioritize a seamless and user-friendly experience, allowing anyone with the survey link to participate</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How do I get support if I encounter issues or have questions?
    </div>
    <div className="collapse-content"> 
      <p>If you need assistance or have any questions, our support team is here to help. Contact us through the support portal, and well respond promptly to address your concerns.</p>
    </div>
  </div>
</div>
        </div>

        </div>
        </div>
        
        </>
        
    );
};

export default FaqSection;