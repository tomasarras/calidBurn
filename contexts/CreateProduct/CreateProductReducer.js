import { SET_PRODUCT } from "../types";

const CreateProductReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
  case SET_PRODUCT:
    return {
      ...state,
      product: payload,
    };
  default:
    return state;
  }
};

export default CreateProductReducer;