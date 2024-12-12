import { useState } from 'react'
import { AiFillMeh } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import products from './data/products.js';

import HomePage from './modules/HomePage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import OrderPage from './modules/OrderPage.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import GamesPage from './games/GamesPage.jsx';

import Navigation from './modules/Navigation.jsx';
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
