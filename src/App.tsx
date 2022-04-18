import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CustomRouter } from './Router';

const App = () => (
    <BrowserRouter>
      <div>
        <CustomRouter />
      </div>
    </BrowserRouter>
  );

export default App;
