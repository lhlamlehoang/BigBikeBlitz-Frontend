import { createSlice } from "@reduxjs/toolkit";

const bikeStore = createSlice({
    name: "bike",
    initialState: {
        listBike: [], // Define the initial value for listBike
        // Add other properties if needed
    },
    reducers: {
        setListBike: (state, action) => {
            state.listBike = action.payload;
        }
    },
});

export const {
    setListBike,
  } = bikeStore.actions;
  
export default bikeStore.reducer;
  