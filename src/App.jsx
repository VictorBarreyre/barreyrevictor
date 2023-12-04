import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import Desk from './components/root/Desk';

function App() {

  return (
    <div className='app'>
      <Router>
        <div className='flex-top-down'>
          <Header />
          <Routes>
          <Route path="/" element={<Desk />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
