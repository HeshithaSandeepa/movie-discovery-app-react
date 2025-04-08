
import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { MovieProvider } from './contexts/MovieContext';



const App = () => {

  return (
    <MovieProvider>
      <div className='container'>
        <NavigationBar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  )
}


export default App
