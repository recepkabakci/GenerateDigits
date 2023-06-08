
import './style.css';
import Generate from "./pages/Generate.jsx"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='app'>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Generate/>}/>
        </Routes>
      </BrowserRouter>  
    </div>    
   
  );
}

export default App;
