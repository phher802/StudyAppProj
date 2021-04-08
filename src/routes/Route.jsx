import React from 'react';
import Python from '../pages/Python';
import JavaScript from '../pages/JavaScript';
import CSharp from '../pages/CSharp';
import Java from '../pages/Java';
import Home from '../pages/Home';

const routes = {
    "/": () => <Home />,
    "/python": () => <Python />,
    "/javaScript": () => <JavaScript />,
    "/cSharp": () => <CSharp />,
    "/java": () => <Java />
};

export default routes;