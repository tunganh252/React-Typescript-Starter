import * as React from "react";
import jsIcon from "@images/icon.png";
import Counter from "@components/Counter";

const App: React.FC = () => {
    return (
        <div id={"container"}>
            <Counter defaultValue={0} />
            <img src={jsIcon} alt={"icon"} width={50} />
        </div>
    )
}

export default App

