// store/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Food = {
  foodId: number;
  menuId: number;
  name: string;
  category: string;
  price: string;
  quantity: number;
};

interface CartState {
  items: Food[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Food>) => {
      const itemExists = state.items.find(item => item.foodId === action.payload.foodId);

      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.foodId !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
