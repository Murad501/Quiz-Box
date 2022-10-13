
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';


const Home = () => {
    const {data} = useLoaderData();
    console.log(data)
    return (
        <div>
            <div className='lg:flex mx-auto  gap-5 border p-2 items-center my-5'>
                <img className='mx-auto' src="https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cXVpenxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <h1 className='text-2xl lg:font-semibold lg:leading-10 text-justify lg:text-left'>Budding minds need room for an interactive form of testing which questions their knowledge and broadens their horizons. Quizzing has proved to be an innovative and informative activity for growing up children. This helps in expanding student's knowledge and exploring new skills at an early age.</h1>
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-20'>
                {
                    data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;