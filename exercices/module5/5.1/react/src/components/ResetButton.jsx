import { useContext } from "react";
import { Context } from "../context/counterContext";

const ResetButton = () => {

    const { resetAll } = useContext(Context);

    return (<div>
        <button onClick={resetAll}>Reset scores</button>
    </div>)
}

export default ResetButton;