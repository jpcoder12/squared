import {useState, useEffect} from 'react'

function Game(props) {

    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();  
    const [roots, setRoots] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])
    const [squares, setSquares] = useState([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324,361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900])
    const [cubes, setCubes] = useState([1, 8, 27, 64, 125, 216, 343, 512, 729, 1000])   
    const [score, setScore] = useState(0);
    
    useEffect(() => {
        // if props.difficulty [1] = Easy
      if(props.difficulty === 1) { 
        setRoots(roots.slice(0, 10))
        setSquares(squares.slice(0, 10))
        console.log(roots, squares)
      } else if (props.difficulty === 2) {
        setRoots(roots.slice(0, 20))
        setSquares(squares.slice(0, 20))
        console.log(roots, squares)
      } else if (props.difficulty === 3) {
        setRoots(roots.slice(0, 30))
        setSquares(squares.slice(0, 30))
        setCubes(cubes.slice(0, 5))
        console.log(roots, squares, cubes)
      } else if (props.difficulty === 4) {
        setRoots(roots.slice(0, 30))
        setSquares(squares.slice(0, 30))
        setCubes(cubes.slice(0, 10))
        console.log(roots, squares, cubes)
      }
    }, [props])

    // create a for loop that iterates through the questions and randomly selects, then picks a number that you use to display on the div where the question is
    
    // for(let i = 0; i < question.length; i++) {
    //  if(question) {
    //  
    //}
    //}

    // create a method that randomly selects an item from your questions array

return (
  <>
    <div id="game" className='col'>
        <div className="row">
            <div id="question">Question</div>
        </div>
        <div className="row">
            <div id="answer">Answer</div>
        </div>
        <div className='row justify-content-center'>
          <div className="row">
              <div id="start-button" className='btn btn-danger' onClick={props.playGame}>Exit</div>
          </div>
        </div>
    </div>
    
  </>
    
    
)

}

export default Game