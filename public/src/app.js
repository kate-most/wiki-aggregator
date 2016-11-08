// Have to import React in every file that uses JSX
import React from 'react';
// Imports a render method of the object exported from ReactDOM
import { render } from 'react-dom';
import './app.scss';

const HelloWorld = () => {
    return <h1>Hello World! I am makaroshki</h1>
};

render(
    <HelloWorld />,
    document.getElementById('react-root')
);
