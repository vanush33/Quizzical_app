import React, {useContext} from 'react'
import Option from './option'
import { ScoreContext } from './ScoreContext'

export default function Question (props) {
    const [options, setOptions] = React.useState([])
    const {score, setScore} = useContext(ScoreContext)

    React.useEffect(function() {
        const allOptions = props.options.concat([props.answer]).map((item, index) => ({
            isChosen: false,
            title: item,
            id: index,
            isCorrect: item === props.answer
        }))
        setOptions(allOptions)
    }, [])

    function chooseOption(id) {
        setOptions(prevChosen => prevChosen.map(item => ({
            ...item,
            isChosen: item.id === id
        })))
        changeScore()
    }

    function changeScore() {
        let score = 0
        for (let item in options) {
            console.log(item)
            if (options.isChosen && options.isCorrect) {
                score++
            }
        }
        setScore(score)
    }
    const optionsData = options.map(item => {
        return(
            <Option key={item.id}
                isChosen={item.isChosen}
                title={item.title}
                isCorrect={item.isCorrect}
                handleClick={() => chooseOption(item.id)}
                isSubmitted={props.isSubmitted}
            />
        )
    })

    return(
        <div className='question'>
            <h2 className='question--title' dangerouslySetInnerHTML={{__html: props.title}}></h2>
            <div className='question--options'>
                {optionsData}
            </div>
            <div className='line'></div>
        </div>
    )
}
