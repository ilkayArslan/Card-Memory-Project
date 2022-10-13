import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { choosenCards, handleStatus, } from "../redux/CardSlicer"
function Card({ card }) {
    const chooseCards = useSelector(state => state.Cards.chooseCards)
    const dispatch = useDispatch();
    function openCard() {
        dispatch(handleStatus(card.id))
        dispatch(choosenCards(card))
    }


    return (
        <div className=' cardcreate'  >

            <div className={card.status ? 'imgcard opening' : "imgcard "}   >
                <img src={card.img} alt={card.key} />
            </div>
            <div className={`closecard ${card.status === true ? 'closing' : ""} ${chooseCards.length === 2 ? "disabled" : ""}`} onClick={() => openCard()}>

            </div>

        </div >
    )
}

export default Card