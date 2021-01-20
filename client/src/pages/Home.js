import React, { useEffect } from "react";
import { getJobs } from "../store/action/jobsAction";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import HomeComponent from "../component/Home";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  const data = useSelector((state) => state.jobsReducer.jobs);

  return (
    <div>
      <Navbar />
      {data.length !== 0 && (
        <div>
          <HomeComponent data={data} />
        </div>
      )}
    </div>
  );
};

export default Home;
