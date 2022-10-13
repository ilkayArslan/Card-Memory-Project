import React from 'react'
import { useSelector } from 'react-redux'

function Again() {
    const Cards = useSelector(state => state.Cards.items);
    let isOk = Cards.every(i => i.status === true)
    return (
        <>{isOk &&
            <div className='againBack'>
                <div className='startAgain'>
                    <div className='text-light fw-bold text-center pt-4 text-uppercase fs-4'>
                        congratulations...
                    </div>
                    <div className='h-75 d-flex justify-content-center align-items-center '>

                        <button className='btn btn-outline-info text-white fw-bold border border-5 p-5' onClick={() => window.location.reload(false)} >
                            Start Again
                        </button>
                    </div>

                </div>
            </div>
        }

        </>


    )
}

export default Again