import React, { useEffect, useState } from 'react';
import './Machins.css';
import logo from '../../image/ABS.png';
import SingleMachin from '../SingelMachins/SingleMachin';
import Personal from '../PersonalInformation/Personal';
import AddToBreack from '../AddToBreak/AddToBreack';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';

const Machins = () => {
    
    const [machins, setMachins] = useState([])
    const [time, setTime] = useState([0])

    useEffect( () =>{
        fetch('faceDb.json')
        .then(res => res.json())
        .then(data => setMachins(data))
    } , [])

    const handelAddToList = (clicked) =>{
        const newArr = [...time, clicked];
        setTime(newArr)
    }

    return (
        <div className='machins'>
            <div className='display-machins'>
                <h1 className='site-name'>UTRA-Active-club</h1>
                <h3>Select today’s exercise</h3>
                
                <div className='all-machins'>
                    {
                        machins.map(machin => <SingleMachin 
                            machin={machin}
                            handelAddToList = {handelAddToList}
                            key = {machin.id}
                            ></SingleMachin>)
                    }
                </div>
                
            </div>
            <div className='display-duration'>
                <Personal></Personal>
                <AddToBreack></AddToBreack>



                <div className='details'>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <h4>Exercise time</h4>
                <p>{time}m</p>
            </div>

            <div className='exercise-time'>
                <h4>Break time</h4>
                <p>00m</p>
            </div>
        </div>
                <button className='completed'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Machins;