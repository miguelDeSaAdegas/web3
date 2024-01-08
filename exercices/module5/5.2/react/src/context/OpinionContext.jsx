import React, { useState } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const opinion = [
        {
            id: v4(),
            name: "opinionA",
            value: 0
        },
        {
            id: v4(),
            name: "opinionB",
            value: 0
        },
        {
            id: v4(),
            name: "opinionC",
            value: 0
        }
    ]

    const [opinionList, setOpinionList] = useState(opinion)
    const [sortedOpinion, setSortedOpinion] = useState(opinion)

    useEffect(() => {
        setSortedOpinion(opinionList.sort((a,b) => b.value - a.value))
    }, [opinionList])

    const addOpinion = (opinion) => {
        const opinionListCopy = [...opinionList]
        opinionListCopy.push({id: v4(), name: opinion, value: 1})
        setOpinionList(opinionListCopy)
    }

    const vote = (idVote) => {
        const opinionListCopy = [...opinionList]
        opinionListCopy.find(e => e.id === idVote).value++;
        setOpinionList(opinionListCopy)
    }

    const exposedValue = {
        opinionList,
        sortedOpinion,
        vote,
        addOpinion,
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}    
