import React, { useEffect, useState } from 'react';
import './Machins.css';
import SingleMachin from '../SingelMachins/SingleMachin';
import Personal from '../PersonalInformation/Personal';
import AddToBreack from '../AddToBreak/AddToBreack';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { type } from '@testing-library/user-event/dist/type';
import Swal from 'sweetalert2'

const Machins = () => {
    
    const [machins, setMachins] = useState([]);
    const [time, setTime] = useState([0]);
    const [breack, setBreak] = useState([0]);

    useEffect( () =>{
        fetch('faceDb.json')
        .then(res => res.json())
        .then(data => setMachins(data))
    } , [])

    const handelAddToList = (clicked) =>{
        const newArr = parseInt(time);
        const clickTime = clicked.time;
        const totalTime = newArr + clickTime
        console.log(typeof newArr)
        console.log(typeof clickTime)
        setTime(totalTime)
    }

    const handelAddToBreak = (clicked) =>{
        const newArr = clicked;
        setBreak(newArr)
        console.log(newArr)
    }

    const handelAddToCompleted = () =>{
        Swal.fire(
            'Good job!',
            'You Completed The Work!',
            'success'
          )
    }
    

    return (
        <div className='machins'>
            <div className='display-machins mt-4'>
                <h1 className='site-name'>
                <FontAwesomeIcon className='dumbbell' icon={faDumbbell} />
                      Fitness Heroes.
                    </h1>
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
            <div className='display-duration p-3'>
                <Personal></Personal>
                <AddToBreack handelAddToBreak = {handelAddToBreak}></AddToBreack>
                <div className='mt-4'>
                    <div className='details'>
                        <h3>Exercise Details</h3>
                    <div className='exercise-time p-2 d-flex justify-content-between align-items-center'>
                        <h4>Exercise time</h4>
                        <p>{time}m</p>
                    </div>

                    <div className='exercise-time p-2'>
                        <h4>Break time</h4>
                        <p>{breack}m</p>
                    </div>
                    </div>
                        <button onClick={() => handelAddToCompleted()} className='completed'>Activity Completed</button>
                    </div>
            </div>
        </div>
    );
};

export default Machins;