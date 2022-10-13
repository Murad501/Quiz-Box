import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Quizs = () => {
    const {data} = useLoaderData()
    console.log(data)
    const {name, questions} = data
    return (
        <div className='pb-20'>
            <h1 className='text-4xl font-bold text-blue-400 my-10'>Quiz of {name}</h1>
            <div>
                {
                   questions.map((quiz, idx)=> <Quiz key={quiz.id} quiz={quiz} idx={idx}></Quiz>) 
                }
            </div>
        </div>
    );
};

export default Quizs;