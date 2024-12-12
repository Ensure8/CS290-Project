import React from 'react';
import { IoPencilSharp, IoTrash } from "react-icons/io5";

function Game({game, onEdit, onDelete}) {
    return (
        <tr>
            <td>{game.gameTitle}</td>
            <td>{game.seriesInstallment}</td>
            <td>{new Date(game.releaseDate).toLocaleDateString('en-US')}</td>
            <td id="deleteButton"><IoTrash size={25} onClick={() => onDelete(game._id)} /></td>
           <td id="editButton"><IoPencilSharp size={25} onClick={() => onEdit(game)} /></td>
        </tr>
    );
}

export default Game;