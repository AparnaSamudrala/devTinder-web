import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import axios from "axios";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    //call the fetchUser only when user data is not available
    //this prevents unnecessary API calls even when user data is present
    //example if u reload profile page again API call is made so we prevent it by checking if userData already exist
    //reload means donot hit the /profile in browser URL bar it means it will always make an API call
    //reload again meaning trying to hit the profile from user dropdown on navbar etc from UI if u try to access the page again

    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
      //navigate("/");
    } catch (err) {
      //if token is not there or invalid we always redirect to login page
      if (err.status === 401) {
        navigate("/login");
      }

      console.error(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
