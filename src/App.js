import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import Sobre from './pages/sobre'
import Planos from './pages/planos'
import Detalhes from './pages/detalhes';
import Footer from './components/Footer/index';
import { PageNotFound } from './components/pageNotFound';


export default function App() {
  return (
    <Router>

      <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom border-bottom bg-warning text-success">
                <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-success text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>
                
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link class="nav-link px-2 link-secondary" to='/'>Home</Link></li>
                      <li><Link class="nav-link px-2 link-dark" to='/sobre'>Sobre</Link></li>
                    <li><Link class="nav-link px-2 link-dark" to='/plano'>Planos</Link></li>
                </ul>
            </header>
        </div>
      
      <Routes>
         <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/plano' element={<Planos />}/>
            <Route path='/detalhes/:filme' element={<Detalhes />}/>
            <Route path='*' element={<PageNotFound />}/>
        </Routes>
      <Footer />
    </Router>
  )
}
