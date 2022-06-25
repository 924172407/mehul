import React from 'react'

const Forminput = (props) => {


    return (
        <div className='container'>
            <label>User Name</label>
            <input placeholder={props.placeholder} ref={props.refer} />
        </div>
    )
}
export default Forminput