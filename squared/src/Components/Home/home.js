import { useState, useEffect } from 'react'
import Game from '../Game/game.js'

function Home(){
    const [timed, setTimed] = useState(true) // timed or endless mode?
    const [difficulty, setDifficulty] = useState(1)
    const [startGame, setStartGame] = useState(false)
    const [info, setInfo] = useState("Choose your preferences below and then click 'Start'")
    
    // delete below state vars after testing
    const totalDuration = 100
    const [timeRemaining, setTimeRemaining] = useState(totalDuration)
    const widthPercentage = (timeRemaining / totalDuration) * 100;


    useEffect(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            return;
        }
        const timer = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
        }, 1000);
        
        return () => clearInterval(timer);
    }, [timeRemaining]);

    let playGame = () => {
        if (startGame === true) {
            setStartGame(false)
            console.log('Game Started', startGame)
        } else {
            setStartGame(true)
            console.log('Game Ended', startGame)
        }
    }
    let changeDifficulty = (e) => {
        let val = e.target.innerHTML
        console.log(e)
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

    let setMessage = (e) => {
        let val = e.target.innerHTML
        if (val === 'Master'){
            setInfo("For those who really want a challenge.")
        } else if (val === 'Hard'){
            setInfo("Adding cubes into the mix")
        } else if (val === 'Medium'){
            setInfo("When you're ready to take on the big ones")
        } else if (val === 'Easy'){
            setInfo("Starting off slow...")
        } else if (val === 'Timed'){
            setInfo("60 seconds to complete as many as possible")
        } else if (val === 'Endless'){
            setInfo("I could do this all day!")
        }
    }
    function setTimeSetting(e) {
        let val = e.target.innerHTML
        if (val === 'Timed'){
            setTimed(true)
        } else if (val === 'Endless'){
            setTimed(false)
        }
    }
    let resetMessage = () => {
        setInfo("Choose your preferences below and then click 'Start'");
    }
    
    return(
        <div className='container' id="home">
            <div className='row'>
                <div className='row time-box'>
                    <div className='deplete-fill' style={{width: `${widthPercentage}`}}></div>
                </div>
            </div>
            <div className="row mt-4 mb-4" id="title-row">
                <h1>SQUARED</h1>
            </div>
            <div className='row'>
                {!startGame ? <div className='col'>
                    <div id="instructions">{info}</div>
                    <div className="row mb-4 mt-1" id="diff-row" onMouseOut={e => resetMessage()}>
                        <div className="col">
                            {difficulty === 1 ? <i className="fa-solid fa-baby fa-spin fa-spin-reverse fa-lg" style={{color: '#000'}}></i> : ''}
                            <div className={difficulty === 1 ? 'mx-1 btn btn-success selected': 'mx-1 btn btn-success'} onMouseOver={e => setMessage(e)} onClick={e => changeDifficulty(e)}>Easy</div>
                            {difficulty === 2 ? <i className="fa-regular fa-face-grin-stars fa-beat-fade" style={{color: '#000'}}></i> : ''}
                            <div className={difficulty === 2 ? 'mx-1 btn btn-primary selected': 'mx-1 btn btn-primary'} onMouseOver={e => setMessage(e)} onClick={e => changeDifficulty(e)}>Medium</div>
                            {difficulty === 3 ? <i className="fa-solid fa-face-angry fa-bounce fa-lg" style={{color: '#000'}}></i> : ''}
                            <div className={difficulty === 3 ? 'mx-1 btn btn-warning selected': 'mx-1 btn btn-warning'} onMouseOver={e => setMessage(e)} onClick={e => changeDifficulty(e)}>Hard</div>
                            {difficulty === 4 ? <i className="fa-solid fa-user-ninja fa-shake fa-lg" style={{color: '#000'}}></i>: ''}
                            <div className={difficulty === 4 ? 'mx-1 btn btn-danger selected': 'mx-1 btn btn-danger'} onMouseOver={e => setMessage(e)} onClick={e => changeDifficulty(e)}>Master</div>
                        </div>
                    </div>
                    <div className="row my-4" id="timing-row">
                        <div className='col' onMouseOut={e => resetMessage()}>
                            
                            <div className={timed ? "btn btn-secondary mx-2 selected" : "btn btn-secondary mx-2"}   onMouseOver={e => setMessage(e)} onClick={e => setTimeSetting(e)}>
                                Timed
                            </div>
                            <div className={timed ? "btn btn-secondary mx-2" : "btn btn-secondary mx-2 selected"} id="endless-button" onMouseOver={e => setMessage(e)} onClick={e => setTimeSetting(e)}>
                                Endless
                            </div>
                            {!timed ? <div><i className="fa-solid fa-infinity fa-beat-fade mx-2 pt-1" style={{color: '#000'}}></i></div> : ''}
                            {timed ? <div><i className="fa-regular fa-clock fa-spin-pulse fa-lg mx-2" style={{color: '#000'}}></i></div> : ''}
                        </div>
                    </div>
                    <div className='row justify-content-center my-4'>
                        <div className="row">
                            <div id="start-button" className='btn btn-light' onClick={playGame}>Start</div>
                        </div>
                    </div>
                </div> : ''}
                {startGame ? 
                <div> {/* col */}
                    <Game difficulty={difficulty} timed={timed} playGame={playGame}/>
                </div> : ''}
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