import React from 'react';
import './../../App.css';

// console.log(process.env)

const name = import.meta.env.VITE_NAME;
const number = import.meta.env.VITE_NUMBER;


function Home() {
    return (
        <>
        <div>
            <h2> Name: {name} </h2>
            <h2> Contact Information: {number} </h2>
        </div>
        <div className="note">
            NOTE - The information provided is fake, for information purposes only.
        </div>
        </>
    );
}

export default Home;
