import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const index = state.items.findIndex((i) => {
        return i.id === action.payload.item.id;
      });
      console.log('add',action.payload.item);
      if (state.items[index]) {
        let updateItem = state.items[index];
        updateItem = {
          ...updateItem,
          quantity: updateItem.quantity + 1,
        };
        state.items[index] = updateItem;
      } else {
        state.items.push({...action.payload.item,quantity:1});
      }

      const newTotalAmount = state.items.reduce((pre, curr) => {
        return pre + curr.quantity * curr.price;
      }, 0);

      state.total = newTotalAmount;
      
    },
    reset: (state, action) => {
      state.items = [];
      state.total = 0;
    }
  },
});

export const { add,reset } = cartSlice.actions;
export default cartSlice.reducer;