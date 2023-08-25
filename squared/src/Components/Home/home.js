import { useState, useEffect } from 'react'
import Game from '../Game/game.js'

function Home(){
    const [timed, setTimed] = useState(true) // timed or endless mode?
    const [difficulty, setDifficulty] = useState(1)
    const [showModal, setShowModal] = useState(false)

    let playGame = () => {
        if (showModal == true) {
            setShowModal(false)
            console.log('Modal is up', showModal)
        } else {
            setShowModal(true)
            console.log('Modal is down', showModal)
        }
    }

   
    
    return(
        <div>
            
            {showModal ? <Game playGame={playGame} difficulty={difficulty} timed={timed} /> : <><div className="row mt-4 mb-4" id="title-row">
                <h1>SQUARED</h1>
            </div>
            <div className="row my-4" id="timing-row">
                <div className='col-6'>Timed</div>
                <div className='col-6'>Endless</div>
            </div>
            <div className="row my-4" id="diff-row">
                <div className='col-3'>Easy</div>
                <div className='col-3'>Medium</div>
                <div className='col-3'>Hard</div>
                <div className='col-3'>Master</div>
            </div>
            <div className='row justify-content-center my-4'>

                <div className='btn btn-success col-1' onClick={playGame}>Start</div>
            </div></>}
        </div>
    )
}

export default Home