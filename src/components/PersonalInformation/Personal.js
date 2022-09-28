import React from 'react';
import './Personal.css'

const Personal = () => {
    return (
        <div className='personal-info'>
            <h3>Kauserul Islam</h3>
            <p><small>Mymenshing, Akua</small></p>
            <div className='body-fitness'>
                <div className='weight'>
                    <h4>49kg</h4>
                    <p>Weight</p>
                </div>
                <div className='height'>
                    <h4>5.6</h4>
                    <p>Height</p>
                </div>
                <div className='age'>
                    <h4>20yr</h4>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Personal;