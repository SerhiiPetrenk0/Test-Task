import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ItemProducts } from '../screens/ItemProducts/ItemProducts';
import { ListProducts } from '../screens/ListProducts/ListProducts';


export const CustomRouter = () => (
        <Routes>
            <Route path="/" element={<ListProducts />} />
            <Route path="Product/:id" element={<ItemProducts />} />
        </Routes>
  )

