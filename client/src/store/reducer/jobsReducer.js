const initialState = { jobs: [], jobsDetail: {} };

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "FITER_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "DETAIL_JOBS":
      return {
        ...state,
        jobsDetail: action.payload,
      };
    default:
      return state;
  }
}

export default jobsReducer;
