import {useState, useEffect} from 'react'

function Game(props) {

    const [questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState(""); 

    useEffect(() => {
        
    }, [])

return (
    <div id="game">
        <div className="row">
            <div id="question">{props.difficulty}</div>
        </div>
        <div className="row">
            <div id="answer">Answer</div>
        </div>
    </div>
)

}

export default Game