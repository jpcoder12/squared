import {useState, useEffect} from 'react'

function Game() {

    const [questions, setQuestions] = useState([]);
    const [answer, setAnswer] = useState(""); 

    useEffect(() => {
        
    }, [])

return (
<div id="game">
    <div className="row">
        <div className="question"></div>
    </div>
</div>
)

}

export default Game