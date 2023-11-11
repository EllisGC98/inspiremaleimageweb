import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';


function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <div className="App">

      <Header open={open} handleOpen={handleOpen}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      <Footer />

    </div>
  );
}

export default App;
