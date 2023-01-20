import React from 'react'
import {nanoid} from 'nanoid'
import Option from './option'

export default function Question(props) {
    //handle all option to one question
    const [options, setOptions] = React.useState([])
    //generating option props
    React.useEffect(function() {
        console.log('option state changed')
        const allOptions = props.options.concat([props.answer]).map((item, index) => ({
            isChosen: false,
            title: item,
            id: index,
            isCorrect: item === props.answer
        }))
        setOptions(allOptions)
    }, [])
    //change state if option is chosen
    function choose(id) {
        setOptions(prevChosen => prevChosen.map(item => ({
            ...item,
            isChosen: item.id === id
        })))
    }
    //mapping through options to return an object
    const allOptions = options.map(item => {
        return (
          <Option key={nanoid()}
              title={item.title}
              isChosen={item.isChosen}
              isCorrect={item.isCorrect}
              choose={() => choose(item.id)}
              isSubmitted={props.isSubmitted}
          />
        )
    })

    return (
        <div className='Question'>
            <h2 className='Question--title'>{props.title}</h2>
            <div className='options'>
                {allOptions}
            </div>
            <div className='line'></div>
        </div>
    )
}