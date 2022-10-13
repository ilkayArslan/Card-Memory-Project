import { useSelector } from "react-redux"


function PointNav() {
    const point = useSelector(state => state.Cards.points)
    return (
        <div className="bg-info py-1 text-light text-center fw-bold fs-2">
            <span className="text-warning">Your Points :</span> {point}

        </div>
    )
}

export default PointNav