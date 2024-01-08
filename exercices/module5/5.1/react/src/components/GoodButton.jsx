import { useContext } from "react";
import { Context } from "../context/counterContext";

const GoodButton = () => {

    const { Good, increaseGood } = useContext(Context);

    return (<div>
        <p>Good : {Good}</p>
        <button onClick={increaseGood}>increase good</button>
    </div>)
}

export default GoodButton;