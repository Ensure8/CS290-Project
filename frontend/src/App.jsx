import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './modules/HomePage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import Navigation from './modules/Navigation.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import { AiFillMeh } from "react-icons/ai";
import products from './data/products.js';

import GamesPage from './games/GamesPage.jsx';
import GameAdd from './games/GameAdd.jsx';
import GameEdit from './games/GameEdit.jsx';

function App() {
  const [game, setGame] = useState([]);

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
                    <Route path="/gamesPage" element={<GamesPage setGame={setGame}/>}></Route>
                    <Route path="/create" element={<GameAdd />}></Route>
                    <Route path="/update" element={<GameEdit gameToEdit={game}/>}></Route>
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
