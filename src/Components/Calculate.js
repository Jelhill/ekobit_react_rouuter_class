import React from 'react'
import { connect } from 'react-redux'
import { addNumberToResult, subtractNumberFromResult } from "../redux/actions"
 
function Calculate(props) {

    const increment = () => {
        const addNumToResult = props.result + 1;
        props.addNumberToResult(addNumToResult)
    }

    const decrement = () => {
        const subtractNumber = props.result - 1;
        props.subtractNumberFromResult(subtractNumber)
    }

    
    return (
        <div>
            <h1>This is our Calculate Route</h1>
            <h2>Result: {props.result}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        result: state.result
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addNumberToResult: (number) => dispatch(addNumberToResult(number)),
        subtractNumberFromResult: (number) => dispatch(subtractNumberFromResult(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculate)