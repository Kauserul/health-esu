import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    const {handelAddTOList} = props;
    console.log(handelAddTOList)
    return (
        <div className='details'>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <p>Exercise time</p>
                <p>00m</p>
            </div>

            <div className='exercise-time'>
                <h4>Break time</h4>
                <p>00m</p>
            </div>
        </div>
    );
};

export default ExerciseDetails;