import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomRouter } from './Router';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
      <div>
        <CustomRouter />
      </div>
    </BrowserRouter>
  );

export default App;
