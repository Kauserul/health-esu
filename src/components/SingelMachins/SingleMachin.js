import React from 'react';
import './SingelMachin.css'

const SingleMachin = (props) => {
    const {img, name, id, time, des, age} = props.machin
    return (
        <div className='machin'>
            <img src={img} alt="" />
            <div className='machin-info'>
                <h3 className='machin-name'>{name}</h3>
                <p className='machin-des'>{des}</p>
                <p>For age : <strong>{age}</strong></p>
                <p>Time required : <strong>{time}</strong></p>
            </div>
            <button className='btn-add'>Add to list</button>
        </div>
    );
};

export default SingleMachin;