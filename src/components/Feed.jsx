import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import UserCard from "./UserCard";
import { addFeed } from "../utils/feedSlice";
const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if (!feed) return;
  if (feed.length <= 0)
    return <h1 className="justify-center flex my-10">No new users found!!</h1>;
  return (
    feed && (
      <div className="flex flex-col items-center justify-center">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
