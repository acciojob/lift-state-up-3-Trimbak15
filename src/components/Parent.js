import React,{useState} from "react";
import Child1 from "./Child1";
import Child2 from './Child2';

const Parent = () =>{
    const [selectedoption, setSelectedOption] = useState("");

    function handleChange(option){
        setSelectedOption(option);
    }
    
    return (

        <div className="parent">
            <h1>Parent Component</h1>
            <Child1 setSelectedOption={handleChange}/>
            <Child2 setSelectedOption={handleChange}/>
            <p>Selected option: {selectedoption}</p>
        </div>
    )
}
export default Parent;