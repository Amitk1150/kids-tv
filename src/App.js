import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
         <Route path='/' element={<Home/>} />
       </Routes>
      </main>
    </div>
  );
}

export default App;
