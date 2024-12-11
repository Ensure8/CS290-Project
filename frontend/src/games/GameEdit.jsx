import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const GameEdit = ( { gameToEdit } ) => {
    const [gameTitle, setGameTitle]       = useState(gameToEdit.gameTitle);
    const [seriesInstallment, setSeriesInstallment] = useState(gameToEdit.seriesInstallment);
    const [releaseDate, setReleaseDate] = useState(gameToEdit.releaseDate);

    const redirect = useNavigate();

    const editGame = async () => {
        const response = await fetch(`/games/${gameToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                gameTitle: gameTitle, 
                seriesInstallment: seriesInstallment, 
                releaseDate: releaseDate 
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Game from collection was edited successfully.`);
        } else {
            const errMessage = await response.json();
            alert(`Unable to edit game from collection: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/gamesPage");
    }

    return (
        <>
            <h2>Edit a game</h2>
            <article>
                <p>On this page, you will be able to edit a game from the collection.</p>
                <table>
                    <caption>Edit this game:</caption>
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
                            <label htmlFor="submit"></label>
                            <button type="submit" onClick={editGame} id="submit">Edit</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </article>            
        </>
    )

}
export default GameEdit;
