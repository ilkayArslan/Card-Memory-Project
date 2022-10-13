import { configureStore } from "@reduxjs/toolkit";
import CardSlicer from "./redux/CardSlicer";

export const store = configureStore({
    reducer: {
        Cards: CardSlicer,
    }
})