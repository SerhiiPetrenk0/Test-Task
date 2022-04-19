import React from 'react';
import { Routes, Route } from 'react-router-dom';
//Components
import * as Screen from './components';

export const CustomRouter = () => (
        <Routes>
            <Route path="/" element={<Screen.ListProducts />} />
            <Route path="Product/:id" element={<Screen.ItemProducts />} />
        </Routes>
);
