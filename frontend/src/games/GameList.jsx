import Game from './Game.jsx';

function GameList ({games, onEdit, onDelete}){
    return (
        <>
            <table id="games">
            <caption>Add and Edit Games</caption>
            <thead>
                <tr>
                    <th>Game Title</th>
                    <th>Installment</th>
                    <th>Release Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, i) => 
                <Game 
                    game={game}
                    key={i}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />)}
            </tbody>
            </table>
        </>
    );
}

export default GameList;