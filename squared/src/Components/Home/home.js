import { useState, react } from 'react'
import Modal from '../Modal/modal.js'

function Home(){
    const [timed, setTimed] = useState(true) // timed or endless mode?
    const [difficulty, setDifficulty] = useState(1)

    
    return(
        <div className="container">
            <div className="row" id="title-row">
                <h1>SQUARED</h1>
            </div>
            <div className="row" id="timing-row">
                <div className='col-6'>Timed</div>
                <div className='col-6'>Endless</div>
            </div>
            <div className="row" id="diff-row">
                <div className='col-3'>Easy</div>
                <div className='col-3'>Medium</div>
                <div className='col-3'>Hard</div>
                <div className='col-3'>Master</div>
            </div>
            <Modal />
        </div>
    )
}

export default Home