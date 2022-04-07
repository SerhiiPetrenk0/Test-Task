import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomRouter } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { LogInForm } from './components/other/LogInForm';

const App = () => (
    <BrowserRouter>
      <div>
        {/* <LogInForm /> */}
        <CustomRouter />
      </div>
    </BrowserRouter>
  );

export default App;
