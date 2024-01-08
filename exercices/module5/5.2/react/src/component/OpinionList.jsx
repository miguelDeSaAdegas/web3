import { useContext } from "react"
import { Context } from "../context/OpinionContext";
import Opinion from "./Opinion";
import AddOpinion from "./AddOpinion";


const OpinionList = () => {

    const { sortedOpinion } = useContext(Context)

    return (
        <div>
            {sortedOpinion.map( (element, index) => 
                <Opinion key={index} opinion={element}/>
            )}
            <AddOpinion/>
        </div>
    )
}

export default OpinionList