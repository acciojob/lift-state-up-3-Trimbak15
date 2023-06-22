import React from "react";

const Child1 = ({setSelectedOption}) => {
    function handleClick(){
        setSelectedOption('option 1');
    }

    return(
        <div className="child1">
            <h2>Children Component 1</h2> 
            <button onClick={handleClick}>Option 1</button>
        </div>
    )
}
export default Child1;