import React from "react";


const NumberForm = (props) => {

    const {name, unmarshalFromDecimal, value,onChange} = props;
    const result = unmarshalFromDecimal(value);

    return (
        <div className="NumberForm">
            <label>
                {name}:
            </label>
            <input type="text" value={result} onChange={onChange}/>
        </div>)


};


export default NumberForm