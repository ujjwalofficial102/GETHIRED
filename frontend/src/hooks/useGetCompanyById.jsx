import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/getcompany/${id}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success === true) {
          dispatch(setSingleCompany(res.data.company));
        } else {
          console.log(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleCompany();
  }, [id, dispatch]);
};

export default useGetCompanyById;
