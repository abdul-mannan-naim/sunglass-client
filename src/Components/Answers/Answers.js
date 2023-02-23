import React from 'react';

const Answers = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold mb-3'> Q-1: How react works? </h1>
                <div>
                    React's approach to building user interfaces is based on the idea
                    of declarative programming, which means that developers describe what
                    they want the user interface to look like, and React takes care of the
                    details of how to update it efficiently. This approach has made React
                    a popular choice for building complex web applications
                </div>
            </div>
            <div>
                <h1 className='font-bold mb-3'>
                    Q-2: How useState works?
                </h1>
                <div>
                    The useState hook is an essential part of React's state management system.
                    It allows functional components to manage their own state, making it easier
                    to build complex, interactive user interfaces
                </div>
            </div>
        </div>
    );
};

export default Answers;