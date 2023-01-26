import React, {useContext} from 'react'
import Option from './option'

export default function Question (props) {
    const [options, setOptions] = React.useState([])

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
    }

    React.useEffect(function() {
        if(props.isSubmitted) { 
            for (let item of options) {
                if (item.isChosen && item.isCorrect) {
                    props.setScore(prevScore => ++prevScore)
                }
            }
        }
    }, [options, props.isSubmitted])

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
