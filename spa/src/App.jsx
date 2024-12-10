import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './modules/HomePage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import MoviePage from './modules/movies/MoviePage.jsx';
import Navigation from './modules/Navigation.jsx';
import TopicsPage from './modules/TopicsPage.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>Daniel Guardado</h1>
    </header>
    <Router>
      <Navigation />
        <main>
            <section>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/gallery" element={<GalleryPage />}></Route>
                    <Route path="/contact" element={<ContactPage />}></Route>
                    <Route path="/order" element={<OrderPage />}></Route>
                    <Route path="/movie" element={<MoviePage />}></Route>
                    <Route path="/topics" element={<TopicsPage />}></Route>
                </Routes>
            </section>
        </main>
    </Router>
    <footer>
        <p>&copy; {new Date().getFullYear()} Daniel Guardado</p>
    </footer>
    </>
  )
}

export default App
