import React, { useMemo } from 'react'

export default function Option (props) {
    const color = useMemo(() => {
        if(props.isSubmitted) {
            return props.isCorrect ? "#94D7A2" : props.isChosen ? "#F8BCBC" : "white"
        }
        if(props.isChosen) {
            return "#D6DBF5"
        }
        return "white"
    }, [props.isChosen, props.isCorrect, props.isSubmitted])

    const styles = {
        backgroundColor: color,
        border: color === "white" ? "1px solid #4D5B9E" : "none" 
    }

    return(
       <div className="option"
            onClick={props.isSubmitted ? "" : props.handleClick}
            style={styles}
            dangerouslySetInnerHTML={{__html: props.title}}>

        </div> 
    )
}