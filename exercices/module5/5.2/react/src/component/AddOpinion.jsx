import { useContext } from "react"
import { Context } from "../context/OpinionContext";


const AddOpinion = () => {

    const { addOpinion } = useContext(Context)

    const handleSubmit = (event) => {
        event.preventDefault()
        addOpinion(event.target[0].value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="submit" value="Add Opinion" />
        </form>
    )
}

export default AddOpinion