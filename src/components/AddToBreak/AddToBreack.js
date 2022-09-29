import React from 'react';
import './AddToBreak.css'

const AddToBreack = () => {
    const breackTimes = [10, 20, 30, 40]
    return (
        <div className='break'>
            <h3>Add A Break</h3>
            <div className='break-time'>
                {
                    breackTimes.map(breackTime => <li>{breackTime}m</li>)
                }
            </div>
        </div>
    );
};

export default AddToBreack;