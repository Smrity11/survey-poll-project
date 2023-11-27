// api, axios (axios secure), tan stack 

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: survey = [] } = useQuery({
        queryKey: ['survey', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/survey?email=${user.email}`);
            return res.data;
        }
    })

    return [survey, refetch]
};

export default useCart;