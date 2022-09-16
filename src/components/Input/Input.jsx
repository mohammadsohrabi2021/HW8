import React from "react";
const Input = ({label,value,onChange,name, type="text"}) => {

    return (
        <label className='lable'>
                <span>Name :</span>
                <input type={type} name={name} className='input' value={value}
                    onChange={onChange} />
            </label>
    );
}

export default Input;