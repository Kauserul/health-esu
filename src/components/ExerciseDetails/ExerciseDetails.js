import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = () => {
    return (
        <div className='details'>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <h4>Exercise time</h4>
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