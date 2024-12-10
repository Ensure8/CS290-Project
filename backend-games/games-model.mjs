// Models for the Game Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to open and access games collection due to internal server error.' });
    } else  {
        console.log('Games collection accessed!');
    }
});

// SCHEMA: Define the collection's schema.
const gameSchema = mongoose.Schema({
	gameTitle:    { type: String, required: true },
	seriesInstallment:     { type: Number, required: true },
	releaseDate: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "games".
const games = mongoose.model('Games', gameSchema);


// CREATE model *****************************************
const createGame = async (gameTitle, seriesInstallment, releaseDate) => {
    const game = new games({ 
        gameTitle: gameTitle, 
        seriesInstallment: seriesInstallment, 
        releaseDate: releaseDate 
    });
    return game.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveGames = async () => {
    const query = games.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveGameByID = async (_id) => {
    const query = games.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteGameById = async (_id) => {
    const result = await games.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateGame = async (_id, gameTitle, seriesInstallment, releaseDate) => {

    if (!(await games.findById({_id: _id}))) {
        throw new Error();
    }
    else {
        const result = await games.replaceOne({_id: _id }, {
            gameTitle: gameTitle,
            seriesInstallment: seriesInstallment,
            releaseDate: releaseDate
        });
        
        return { 
            _id: _id, 
            gameTitle: gameTitle,
            seriesInstallment: seriesInstallment,
            releaseDate: releaseDate 
        }
    }
}

// EXPORT the variables for use in the controller file.
export { createGame, retrieveGames, retrieveGameByID, updateGame, deleteGameById }