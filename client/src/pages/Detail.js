import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsJob } from "../store/action/jobsAction";
import { useParams } from "react-router-dom";
import DetailComponent from "../component/Detail";
import Navbar from "../component/Navbar";

const Detail = () => {
  const dispatch = useDispatch();
  const param = useParams().id;
  useEffect(() => {
    dispatch(getDetailsJob(param));
  }, [dispatch, param]);
  const data = useSelector((state) => state.jobsReducer.jobsDetail);
  return (
    <div>
      <Navbar />
      {Object.keys(data).length !== 0 && <DetailComponent data={data} />}
    </div>
  );
};

export default Detail;
