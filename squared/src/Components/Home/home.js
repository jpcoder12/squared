import { useState, react } from 'react'
import modal from '../Modal/modal.js'

function Home(){
    const [timed, setTimed] = useState(true) // timed or endless mode?
    const [difficulty, setDifficulty] = useState(1)

    
    return(
        <div className="container">
            <Modal />
        </div>
    )
}

export default Home