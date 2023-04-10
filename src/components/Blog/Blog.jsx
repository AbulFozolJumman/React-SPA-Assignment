import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center'>Some React Question and Answer</h2>
            <h4 className='m-5'>
                Q1: Props vs state! <br />
                Ans: <br />
                1. States are mutable, Props are immutable. <br />
                2. States can define in the component itself, Props can pass from the parent component to the child component and it's unidirectional. <br />
                3. States can be set and updated, Props are static. <br />
                4. The State is internal and controlled by the React Component itself, Props are external and controlled by whatever renders the component.
            </h4>
            <h4 className='m-5'>
                Q2: How does useState work? <br />
                Ans: useState is React Hook that add state inside component. useState returns an array with exactly two values: the current state and a function. 
                And Hook takes an initial value and returns an updated state value whenever the function called.
            </h4>
            <h4 className='m-5'>
                Q3: What is the purpose of useEffect other than fetching data. <br />
                Ans: useEffect can use to do side effects inside components with or without dependencies argument when needed. Mostly it used to fetch API data but we can also use 'useEffect' to validating input field, live filtering, load data from localStorage, trigger animation on new array value with the help of useState.
            </h4>
            <h4 className='m-5'>
                Q4: How Does React work? <br />
                Ans: React is a popular JavaScript library for mobile and web application development created by Facebook.
                React used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than we do with vanilla JavaScript.
                React contains a collection of reusable JavaScript code snippets use for user interface 'UI' building called components. React infuse HTML code with JavaScript. It uses Virtual DOM to render browser code. It supports CSS for creating animations and styling.
        </h4>

        </div>
    );
};

export default Blog;