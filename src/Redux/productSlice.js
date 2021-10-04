import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
      productList:[],
      productDetails:{}
  },
  reducers: {
    getProductDetails: (state, action) => {
        state.productDetails=action.payload.productDetails
    },
    addProductList: (state, action) => {
      state.productList = action.payload.productList ;
    },
   },
});

export const { getProductDetails ,addProductList} = productSlice.actions;
export default productSlice.reducer;
