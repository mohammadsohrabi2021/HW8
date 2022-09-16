import React from "react";
const FormToDo = ({ onSubmit, formData, setFormData }) => {
    const handleUpdateInputs = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
   
    return (
        <form onSubmit={(e)=> onSubmit(e,formData)}
            className="form p_15">
            <label className='lable'>
                <span>Name :</span>
                <input type="text" name="title" className='input' value={formData.title}
                    onChange={handleUpdateInputs} />
            </label>
            <label className='lable'>
                <span>LastName :</span>
                <input type="text" name="discription" className='input' value={formData.discription} onChange={handleUpdateInputs} />
            </label>
            <input type="Submit" name="save" className='input-submit' />
        </form>
    );
}

export default FormToDo;