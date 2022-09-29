import React from 'react';
import './AddToBreak.css'

const AddToBreack = (props) => {
    const {handelAddToBreak} = props
    
    return (
        <div className='break mt-4'>
            <h3>Add A Break</h3>
            <div className='break-time'>
                <button onClick={()=>handelAddToBreak(10)}>10</button>
                <button onClick={()=>handelAddToBreak(20)}>20</button>
                <button onClick={()=>handelAddToBreak(30)}>30</button>
                <button onClick={()=>handelAddToBreak(40)}>40</button>
                
            </div>
        </div>
    );
};

export default AddToBreack;