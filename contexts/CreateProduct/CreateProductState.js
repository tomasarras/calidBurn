import React, { useReducer } from "react";
import { SET_PRODUCT } from "../types";
import CarTypeReducer from "./CarTypeReducer";
import CreateProductContext from "./CreateProductContext";

const CreateProductState = (props) => {
  const { children } = props;
  const initialState = {
    product: null,
  };

  const [state, dispatch] = useReducer(CarTypeReducer, initialState);

  const setProduct = async (product) => {
    dispatch({
      type: SET_PRODUCT,
      payload: product,
    });
  };

  return (
    <CreateProductContext.Provider
      value={{
        product: state.product,
        setProduct,
      }}
    >
      {children}
    </CreateProductContext.Provider>
  );
};

export default CreateProductState;