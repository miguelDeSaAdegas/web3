import { useContext } from "react"
import { Context } from "../context/OpinionContext";


const Opinion = ({ opinion }) => {

    const { id, name, value } = opinion

    const { vote } = useContext(Context)

    return (
        <div>
            <p>{name} : {value}</p>
            <button onClick={() => vote(id)}>Vote</button>
        </div>
    )
}

export default Opinion