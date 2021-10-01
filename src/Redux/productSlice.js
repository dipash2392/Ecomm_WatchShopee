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
        console.log(state.productDetails)
    },
    addProductList: (state, action) => {
      state.productList = action.payload.productList ;
      console.log(state.productList)
    },
//     editStudent:(state, action) => {
//         let index = action.payload.id -1
//        let editStudent = {
//             id: action.payload.id,
//             name: { firstName:action.payload.firstName, lastName: action.payload.lastName},
//             birthDate:action.payload.birthDate,
//             bloodGroup: action.payload.bloodGroup,
//             standard: action.payload.standard,
//           }
//         state[index]=editStudent
//       },
   },
});

export const { getProductDetails ,addProductList} = productSlice.actions;
export default productSlice.reducer;
