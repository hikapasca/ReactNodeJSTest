export const getJobs = () => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001`)
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        dispatch({
          type: "SET_JOBS",
          payload: message,
        });
      })
      .catch((err) => {
        console.log("apakah error", err);
      });
  };
};

export const getJobsByFilter = (type) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/positions?type=${type}`)
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        console.log(message, "cekcek");
        dispatch({
          type: "FITER_JOBS",
          payload: message,
        });
      })
      .catch((err) => {
        console.log("apakah error", err);
      });
  };
};

export const getDetailsJob = (id) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3001/detail/${id}`)
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        console.log(message, "ini pesan");
        dispatch({
          type: "DETAIL_JOBS",
          payload: message,
        });
      })
      .catch((err) => {
        console.log("apakah error", err);
      });
  };
};
