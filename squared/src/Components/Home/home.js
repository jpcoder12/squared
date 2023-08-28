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
        <div className='container'>
            
            {showModal ? <Game playGame={playGame} difficulty={difficulty} timed={timed} /> : 
            <div className='container' id="home">
            <div className="row mt-4 mb-4" id="title-row">
                <h1>SQUARED</h1>
            </div>
            Choose your preferences below and then click 'Start'
            <div className="row my-4" id="timing-row">
                <div className='col-6'>
                    <div className="btn btn-secondary">
                        Time Limit
                    </div>
                </div>
                <div className='col-6'>
                    <div className="btn btn-secondary" id="endless-button">
                        Endless
                    </div>
                </div>
            </div>
            <div className="row my-4" id="diff-row">
                <div className='col-3 mx-3 btn btn-primary'>Easy</div>
                <div className='col-3 mx-3 btn btn-success'>Medium</div>
                <div className='col-3 mx-3 btn btn-warning'>Hard</div>
                <div className='col-3 mx-3 btn btn-danger'>Master</div>
            </div>
            <div className='row justify-content-center my-4'>
                <div className='btn btn-light col-1' onClick={playGame}>Start</div>
            </div></div>}
            <div className='row'></div>
        </div>
    )
}

export default Home