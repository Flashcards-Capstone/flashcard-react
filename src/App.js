import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={ <Home/> } exact />
        <Route path="/login" element={ <LogIn/> } exact />
      </Routes>

    </div>
  );
}

export default App;
