import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Импортируйте Routes
import Home from './components/Home/Home';
import Calculations from './components/Calc/Calculations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculations/:value" element={<Calculations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;