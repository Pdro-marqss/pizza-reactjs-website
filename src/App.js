// Routes é o novo switch (v 6.0 do react-router-dom)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//css
import './styles/global-styles.css';

//componets
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';


//o navbar esta em cima do Routes(antigo switch) porque todas as paginas vao ter navbar renderizado.
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
