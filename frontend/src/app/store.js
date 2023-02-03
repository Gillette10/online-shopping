import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import { productsApi } from "../features/productsApi";
import cartReducers, { getTotal } from "../features/cartSlice";

export const store = configureStore({
	reducer: {
		product: productsReducer,
		cart: cartReducers,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(getTotal());
