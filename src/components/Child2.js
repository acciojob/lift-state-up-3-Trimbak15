import React from "react";

const Child2 = ({setSelectedOption}) =>{

    function handleClick(){
        setSelectedOption("Option 2");
    }    
    return (
        <div className="child2">
            <h2>Children Component 2</h2>
            <button onClick={handleClick}>Option 2</button>
        </div>
    )
}

export default Child2;