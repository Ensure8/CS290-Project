import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameList from './GameList';
import { Link } from 'react-router-dom';


function GamesPage({setGame}){
    const redirect = useNavigate();
    const [games, setGames] = useState([]);

    const loadGames = async () => {
        const response = await fetch('/games');
        const games = await response.json();
        setGames(games);
    }

    const onEditGame = async () => {
        setGames(games);
        redirect("/update");
    }

    const onDeleteGame = async _id => {
        const response = await fetch(`/games/${_id}`, { method: 'DELETE' });
          if (response.status === 200) {
             const getResponse = await fetch('/games');
             const games = await getResponse.json();
             setGames(games);
        } else {
             console.error(`Deleted the game from the database = ${_id}, status code = 
             ${response.status}`)
          }
      }

    useEffect(() => {loadGames();}, []);

    return (
        <>
            <h2>Popular Games</h2>
            <article>
                <p>This page gives a list of popular retro video games.</p>

                <Link to="/create">Add Game</Link>

                <GameList
                    games={games}
                    onEdit={onEditGame}
                    onDelete={onDeleteGame}
                />
            </article>
        </>
    )
}
export default GamesPage;