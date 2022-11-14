const authReducer = (state, action) => {
  if (action.type === "Login") {
    return { ...action.payload };
  }
  return { ...state };
};

export default authReducer;
z