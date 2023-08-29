import {useState, useEffect} from 'react'

function Game(props) {

    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState(props.difficulty); 


    useEffect(() => {
        // if props.difficulty [1] = Easy
        // 
        let roots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        let squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324,361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900]
        let cubes = [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
      if(props.difficulty === 1) { 
        roots = roots.slice(0, 10)
        squares = squares.slice(0, 10)
      } else if (props.difficulty === 2) {
        roots = roots.slice(0, 20)
        squares = squares.slice(0, 20)
      } else if (props.difficulty === 3) {
        roots = roots.slice(0, 30)
        squares = squares.slice(0, 30)
        cubes = cubes.slice(0, 5)
      } else if (props.difficulty === 4) {
        roots = roots.slice(0, 30)
        squares = squares.slice(0, 30)
        cubes = cubes.slice(0, 10)
      }
    }, [props])

return (
    <div id="game">
        <div className="row">
            <div id="question">{answer}</div>
        </div>
        <div className="row">
            <div id="answer">Answer</div>
        </div>
    </div>
)

}

export default Game