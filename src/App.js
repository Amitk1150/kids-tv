import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Add from './pages/Add';
import Delete from './pages/delete';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/add' element={<Add/>} />
         <Route path='/delete' element={<Delete/>} />
       </Routes>
      </main>
    </div>
  );
}

export default App;
