import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header/>

      <Routes>
        <Route path="/" element={ <Home/> } exact />
      </Routes>

    </div>
  );
}

export default App;
