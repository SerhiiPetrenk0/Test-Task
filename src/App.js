import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomRouter } from "./router/Router"
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <CustomRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
