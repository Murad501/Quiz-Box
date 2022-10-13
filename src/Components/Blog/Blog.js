import React from 'react';

const Blog = () => {
    return (
        <div className='text-left'>
            <div className='p-2 rounded my-5 py-5'>
                <h1 className='font-bold text-3xl mb-3'>1. What is the purpose of react router?</h1>
                <p className='text-xl'><span className='font-bold'>Ans.</span> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='p-2 rounded my-5 py-5'>
                <h1 className='font-bold text-3xl mb-3'>2. How does context api work?</h1>
                <p className='text-xl'><span className='font-bold'>Ans.</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            </div>
            <div className='p-2 rounded my-5 py-5'>
                <h1 className='font-bold text-3xl mb-3'>3. About React JS useRef Hook.</h1>
                <p className='text-xl'><span className='font-bold'>Ans.</span> The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. <br /> The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;