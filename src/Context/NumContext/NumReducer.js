const NumReducer = (state, action) => {
  if (action.type === "PLUS") {
    return state + 1;
  }
  if (action.type === "MINUS") {
    return state - 1;
  }
};

export default NumReducer;
