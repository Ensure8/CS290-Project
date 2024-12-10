// Controllers for the Game Collection

import 'dotenv/config';
import express from 'express';
import * as games from './games-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/games', (req,res) => { 
    games.createGame(
        req.body.gameTitle, 
        req.body.seriesInstallment, 
        req.body.releaseDate
        )
        .then(game => {
            console.log(`"${game.gameTitle}" was created and added to the collection.`);
            res.status(201).json(game);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to add game to the collection due to malformed request from the client.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/games', (req, res) => {
    games.retrieveGames()
        .then(games => { 
            if (games !== null) {
                console.log(`All games were retrieved from the collection.`);
                res.json(games);
            } else {
                res.status(404).json({ Error: 'Server was unable to find games.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to retrieve all games from the collection due to malformed request from the client.' });
        });
});


// RETRIEVE by ID controller
app.get('/games/:_id', (req, res) => {
    games.retrieveGameByID(req.params._id)
    .then(game => { 
        if (game !== null) {
            console.log(`"${game.gameTitle}" was retrieved, based on its ID.`);
            res.json(game);
        } else {
            res.status(404).json({ Error: 'Server was unable to find a game with that id.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to retrieve game using that id due to malformed request from the client.' });
    });

});


// UPDATE controller ************************************
app.put('/games/:_id', (req, res) => {

    games.updateGame(
        req.params._id, 
        req.body.gameTitle, 
        req.body.seriesInstallment, 
        req.body.releaseDate
    )
    .then(game => {
        console.log(`"${game.gameTitle}" was updated.`);
        res.json(game);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to find and update the game with that id due to malformed request from the client.' });
    });
});


// DELETE Controller ******************************
app.delete('/games/:_id', (req, res) => {
    games.deleteGameById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} game was deleted.`);
                res.status(200).send({ Success: 'Game was deleted successfully.' });
            } else {
                res.status(404).json({ Error: 'No game with that id found by the server.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Unable to find and delete the game with that id.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});