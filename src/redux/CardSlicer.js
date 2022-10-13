import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data"
const CardSlicer = createSlice({
    name: "Cards",
    initialState: {
        items: data,
        points: 100,
        chooseCards: [],
        selectItem: [],
        chosenOne: [],
        chosenTwo: [],

    },
    reducers: {
        shuffleCards: (state) => {
            state.items = state.items.sort(() => 0.5 - Math.random())
        },
        handleStatus: (state, action) => {
            state.selectItem = state.items.filter(item => item.id === action.payload)
            state.selectItem[0].status = true

        },
        choosenCards: (state, action) => {
            state.chooseCards.push(action.payload);
        },
        incrementPoint: (state, action) => {
            state.points += 50
            state.chooseCards = []

        },
        decrementPoint: (state) => {
            state.points -= 10

        },
        changeStatus: (state, action) => {
            state.chosenOne = state.items.filter(i => i.id === state.chooseCards[0].id)
            state.chosenTwo = state.items.filter(i => i.id === state.chooseCards[1].id)
            state.chosenOne[0].status = false;
            state.chosenTwo[0].status = false
            state.chooseCards = []

        },

    }

})
export const { shuffleCards, choosenCards, handleStatus, incrementPoint, decrementPoint, changeStatus } = CardSlicer.actions
export default CardSlicer.reducer