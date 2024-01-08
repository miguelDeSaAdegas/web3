import { useContext } from "react";
import { Context } from "../context/counterContext";

const BadButton = () => {

    const { Bad, increaseBad } = useContext(Context);

    return (<div>
        <p>Bad : {Bad}</p>
        <button onClick={increaseBad}>increase bad</button>
    </div>)
}

export default BadButton;