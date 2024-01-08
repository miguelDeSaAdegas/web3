import { useContext } from "react";
import { Context } from "../context/counterContext";

const OkButton = () => {

    const { Ok, increaseOk } = useContext(Context);

    return (<div>
        <p>ok : {Ok}</p>
        <button onClick={increaseOk}>increase ok</button>
    </div>)
}

export default OkButton;