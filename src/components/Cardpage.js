import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { shuffleCards, incrementPoint, decrementPoint, changeStatus } from "../redux/CardSlicer"
import Card from './Card';
function Cardpage() {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.Cards.items)
    const chooseCards = useSelector(state => state.Cards.chooseCards)

    useEffect(() => {
        dispatch(shuffleCards())

    }, [dispatch])

    useEffect(() => {
        if (chooseCards.length === 2) {
            if (chooseCards[0].key === chooseCards[1].key) {
                dispatch(incrementPoint());

            } else {
                dispatch(decrementPoint());
                setTimeout(() => {
                    dispatch(changeStatus())
                }, 2000);


            }
        }
    }, [chooseCards])

    return (
        <div className='row g-2 container text-center cardcont'>
            {cards.map(card => {
                return (
                    <div className='col-2' key={card.id}>
                        <Card card={card} />
                    </div>
                )
            })}
        </div>
    )
}

export default Cardpage