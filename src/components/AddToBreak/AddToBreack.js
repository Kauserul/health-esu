import React from 'react';
import './AddToBreak.css'

const AddToBreack = (props) => {
    const {handelAddToBreak} = props
    
    return (
        <div className='break mt-4'>
            <h3>Add A Break</h3>
            <div className='break-time'>
                <button onClick={()=>handelAddToBreak(10)}>10m</button>
                <button onClick={()=>handelAddToBreak(20)}>20m</button>
                <button onClick={()=>handelAddToBreak(30)}>30m</button>
                <button onClick={()=>handelAddToBreak(40)}>40m</button>
                
            </div>
        </div>
    );
};

export default AddToBreack;