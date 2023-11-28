






// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const PaymentUser = () => {
    // const axiosSecure = useAxiosSecure();
    const payments =useLoaderData()

    // const { data: payments = [] } = useQuery({
    //     queryKey: ['payments'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/payments')
    //         return res.data;
    //     }
    // })

  return (
    <div className=" h-screen relative">
    <div className="h-screen "
    style={{
      backgroundImage:
        "url(https://media.istockphoto.com/id/1249955438/photo/check-mark-symbol-drawn-by-purple-neon-light-on-black-wall.jpg?s=612x612&w=0&k=20&c=Pk0TUB5q-25iidBP7CbmA4CXgCQz9i0MWiOQnNjJj5g=)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% ",
    }}>
      <div className="bg-black bg-opacity-[0.8] z-10 absolute w-full h-screen text-white">
      <SectionTitle heading="Manage status"></SectionTitle>
        <h2 className="text3-xl">Total Payments:{payments.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th>#</th>
                <th>Email</th>
                <th>price</th>
                <th>Transaction Id</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {
                payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>{payment.email}</td>
                    <td>${payment.price}</td>
                    <td>{payment.transactionId}</td>
                    <td>{payment.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default PaymentUser;
