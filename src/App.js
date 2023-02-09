import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={ <Home/> } exact />
      </Routes>

    </div>
  );
}

export default App;
