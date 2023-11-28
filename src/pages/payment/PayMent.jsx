import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import PaymentForm from "./PaymentForm";
import { Helmet } from "react-helmet";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PayMent = () => {
    return (
        <>
            <Helmet>
                 <title>OpinioNex | Payment</title>
             </Helmet>
             <div className="bg-[#1C1C1E] h-screen py-24">
            <SectionTitle  heading="Payment" subHeading="Please pay to Pro User"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm></PaymentForm>
                </Elements>
            </div>
        </div>
        </>
       
    );
};

export default PayMent;