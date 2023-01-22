import React from 'react'


export default function Main(props) {

    return(
        <div className="main">
            <h1 className='main--heading'>Quizzical</h1>
            <p className='main--desc'>Some description if needed</p>
            <button className='button main--button' onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}