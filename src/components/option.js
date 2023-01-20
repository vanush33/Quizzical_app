import React, { useMemo } from 'react'

export default function Option (props) {
    //returning specific color to options
    //depends on isChosen, isSubmitted and isCorrect props
    const color = useMemo(() => {
        if(props.isSubmitted) {
            return props.isCorrect ? "#94D7A2" : props.isChosen ? "#F8BCBC" : "white"
        }
        if(props.isChosen) {
            return "#D6DBF5"
        }
        return "white"
    }, [])
    //applying styles
    const styles = {
        backgroundColor: color,
        border: color === "white" ? "1px solid #4D5B9E" : "none" 
    }

    return(
       <div className="Option" onClick={props.choose} style={styles}>{props.title}</div> 
    )
}