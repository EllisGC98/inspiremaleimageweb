import './App.css';
import FadeInOnScroll from './components/FadeInOnScroll';
import Header from './components/Header';
import Mission from './components/Mission';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
     <Header />
     <FadeInOnScroll>
     <Mission />
     <Team />
     <Footer />
     </FadeInOnScroll>
  
    </div>
  );
}

export default App;
