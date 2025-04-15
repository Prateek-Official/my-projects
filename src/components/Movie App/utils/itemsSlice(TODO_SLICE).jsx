import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    itemsList: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.itemsList.push(action.payload);
    },
    removeItems: (state, action) => {
      // console.log(action.payload)
      state.itemsList = state.itemsList.filter(
        (item, index) => index != action.payload
      );
    },
    clearItems: (state) => {
      state.itemsList.length = 0;
    },
    editItems: (state, action) => {
      const { index, newText } = action.payload;
      state.itemsList[index] = newText
    },
  },
});

export const { addItems, removeItems, clearItems, editItems } = itemsSlice.actions;
export default itemsSlice.reducer;
