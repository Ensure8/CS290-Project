import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const GameAdd = () => {
    const [gameTitle, setGameTitle] = useState('');
    const [seriesInstallment, setSeriesInstallment] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const redirect = useNavigate();

    const addGame = async (event) => {
        event.preventDefault();
        const newGame = { gameTitle, seriesInstallment, releaseDate };
        try {
            const response = await fetch('/games', {
                method: 'POST',
                body: JSON.stringify(newGame),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.status === 201){
                alert(`New game was added to the games collection.`);
                redirect("/gamesPage");
            } else {
                alert(`New game could not be added to games collection = ${response.status}`);
            }
        } catch (error) {
            alert(`Error occured while trying to add game to games collection = ${response.status}`);
        }
    };

    return (
        <>
        <h2>Add a Game</h2>
        <article>
            <p>This page can be used to add a game to the games collection.</p>
            <form id="addGameForm" onSubmit={addGame} >
            <table>
                <caption>What game are you adding?</caption>
                <thead>
                    <tr>
                        <th>Game Title</th>
                        <th>Installment</th>
                        <th>Release Date</th>
                        <th>Submit</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="gameTitle"></label>
                        <input type="text" placeholder="Game Title" id="gameTitle" value={gameTitle} required onChange={e => setGameTitle(e.target.value)}/>
                    </td>
                    <td>
                        <label htmlFor="seriesInstallment"></label>
                        <input type="number" placeholder="Installment" id="seriesInstallment" value={seriesInstallment} required onChange={e => setSeriesInstallment(e.target.value)}/>
                    </td>
                    <td>
                        <label htmlFor="releaseDate"></label>
                        <input type="date" placeholder="Release Date" id="releaseDate" value={releaseDate} required onChange={e => setReleaseDate(e.target.value)}/>
                    </td>
                    <td>
                        <label htmlFor="submit">
                        <button type="submit" id="submit">Add Game</button></label>
                    </td>
                </tr>
            </tbody>
            </table>
            </form>
        </article>
        </>
    )
}

export default GameAdd;