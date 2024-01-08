import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [Good, setGood] = useState(0)
    const [Ok, setOk] = useState(0)
    const [Bad, setBad] = useState(0)
    const increaseGood = () => {
        setGood(Good +1)    
    }

    const increaseOk = () => {
        setOk(Ok +1)    
    }

    const increaseBad = () => {
        setBad(Bad +1)    
    }

    const resetAll = () => {
        setGood(0)
        setBad(0)
        setOk(0)
    }
    
    const exposedValue = {
        Good,
        Bad,
        Ok,
        increaseBad,
        increaseGood,
        resetAll,
        increaseOk,
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    
