import React from 'react';
import './Machins.css';
import logo from '../../image/ABS.png';
import SingleMachin from '../SingelMachins/SingleMachin';

const Machins = () => {
    console.log(logo)
    const machins = [
        {id : 1, img : 'https://cf.ltkcdn.net/fitness/gear-and-apparel/images/std/303662-800x533-elliptical-machine.jpg', name : 'Cardio', time : '30m', des : 'An ab wheel is among the most basic equipment for..', age : '25-30' },
        {id : 2, img : 'https://www.panattasport.com/resources/home/homefitness-home.jpg', name : 'Bikes', time : '30s', des : 'An ab wheel is among the most basic equipment for..', age : '30-35' },
        {id : 3, img : 'https://media.self.com/photos/5879598439d082f57cdffb4c/1:1/w_2014,h_2014,c_limit/exercise-machines-burn-fat.jpg', name : 'Stomach', time : '15m', des : 'An ab wheel is among the most basic equipment for..', age : '20-25' },
        {id : 4, img : 'https://cdn.shopify.com/s/files/1/1633/7705/files/ab_workout_on_bench_480x480.jpg?v=1632107579', name : 'Bench', time : '20m', des : 'An ab wheel is among the most basic equipment for..', age : '30-32' },
        {id : 5, img : 'https://img.freepik.com/premium-photo/sexy-girl-performing-sit-up-exercises-strengthen-their-core-abdominal-muscles-young-woman-doing-sit-ups-bench-modern-gym-workout-concept_35150-2432.jpg?w=2000', name : 'Sit Ups', time : '40m', des : 'An ab wheel is among the most basic equipment for..', age: '25-30' },
        {id : 6, img : 'https://cdn.shopify.com/s/files/1/1497/9682/articles/unnamed.jpg?v=1627572978', name : 'Foam roller', time : '10m', des : 'An ab wheel is among the most basic equipment for..', age : '18-23'},
    ]
    console.log(machins)
    return (
        <div className='machins'>
            <div className='display-machins'>
                <h1>UTRA-Active-club</h1>
                <h3>Select today’s exercise</h3>
                
                <div className='all-machins'>
                    {
                        machins.map(machin => <SingleMachin machin={machin}></SingleMachin>)
                    }
                </div>
                
            </div>
            <div className='display-duration'>
                
            </div>
        </div>
    );
};

export default Machins;