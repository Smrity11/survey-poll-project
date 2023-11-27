import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import PaymentForm from "./PaymentForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PayMent = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm></PaymentForm>
                </Elements>
            </div>
        </div>
    );
};

export default PayMent;