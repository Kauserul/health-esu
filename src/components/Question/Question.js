import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h1 className='text-center mt-4 text-primary'>Some Common Question!!!</h1>
            <div className='all-question'>
                <div className='single-question'>
                    <h1>How does react work?</h1>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                </div>
                <div className='single-question'>
                    <h1>Difference state and props</h1>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
                <div className='single-question'>
                    <h1>What does useEffect do other than load data?</h1>
                    <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;