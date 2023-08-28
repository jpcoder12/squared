import { useState, useEffect } from 'react'
import Game from '../Game/game.js'

function Home(){
    const [timed, setTimed] = useState(true) // timed or endless mode?
    const [difficulty, setDifficulty] = useState(1)
    const [startGame, setStartGame] = useState(false)
    

    let playGame = () => {
        if (startGame == true) {
            setStartGame(false)
            console.log('Game Started', startGame)
        } else {
            setStartGame(true)
            console.log('Game Ended', startGame)
        }
    }
    let changeDifficulty = (e) => {
        let val = e.target.value
        if (val === 'Master'){
            setDifficulty(4)
        } else if (val === 'Hard'){
            setDifficulty(3)
        } else if (val === 'Medium'){
            setDifficulty(2)
        } else if (val === 'Easy'){
            setDifficulty(1)
        }
    }
    return(
        <div className='container' id="home">
            <div className="row mt-4 mb-4" id="title-row">
                <h1>SQUARED</h1>
            </div>
            <div className='row'>
                <div className='col'>
                    
                    Choose your preferences below and then click 'Start'
                    <div className="row my-4" id="diff-row">
                        <div className='col-3 mx-1 btn btn-primary' onClick={e => changeDifficulty(e)}>Easy</div>
                        <div className='col-3 mx-1 btn btn-success' onClick={e => changeDifficulty(e)}>Medium</div>
                        <div className='col-3 mx-1 btn btn-warning' onClick={e => changeDifficulty(e)}>Hard</div>
                        <div className='col-3 mx-1 btn btn-danger' onClick={e => changeDifficulty(e)}>Master</div>
                    </div>
                    <div className="row my-4" id="timing-row">
                        <div className='col'>
                            <div className="btn btn-secondary">
                                Time Limit
                            </div>
                        </div>
                        <div className='col'>
                            <div className="btn btn-secondary" id="endless-button">
                                Endless
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center my-4'>
                        <div className="row">
                            <div  id="start-button" className='btn btn-light' onClick={playGame}>Start</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <Game difficulty={difficulty} timed={timed}/>
                </div>
            </div>
            <div className="my-2" id="footer">
                <span>Made with ❤️ by </span>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/joshpeoples/"> Joshua Peoples</a> <span>and</span>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/bianchimena/"> Bianchi Mena</a>
            </div>
        </div>
    )
}

export default Home