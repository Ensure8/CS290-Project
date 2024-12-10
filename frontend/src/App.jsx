import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './modules/HomePage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import GamesPage from './modules/GamesPage.jsx';
import Navigation from './modules/Navigation.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import './App.css';
import { AiFillMeh } from "react-icons/ai";
import products from './data/products.js';

function App() {

  return (
    <>
    <header>
      <h1>Daniel <AiFillMeh /> Guardado</h1>
    </header>
    <Router>
      <Navigation />
        <main>
            <section>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/topics" element={<TopicsPage />}></Route>
                    <Route path="/gallery" element={<GalleryPage />}></Route>
                    <Route path="/contact" element={<ContactPage />}></Route>
                    <Route path="/order" element={<OrderPage products={products}/>}></Route>
                    <Route path="/games" element={<GamesPage />}></Route>
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
