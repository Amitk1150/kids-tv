import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Add from './pages/Add';
import Delete from './pages/delete';
import './App.css';
import Shorts from './pages/Shorts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/shorts' element={<Shorts />} />
         <Route path='/add' element={<Add/>} />
         <Route path='/delete' element={<Delete/>} />
       </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
