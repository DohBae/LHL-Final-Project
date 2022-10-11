const db = require('../../configs/db.config');

const getFavoritedNotes = () => {
	return db.query("SELECT * FROM notes RIGHT JOIN favourites ON notes.id = favourites.note_id ;").then(data => {
		return data.rows;
	})
}
const getFavs = () => {
	return db.query("SELECT * FROM favourites;" ).then(data => {
		return data.rows;
	})
}
const addFavorites = (noteId) => {
	return db.query(`INSERT INTO favourites (id, note_id) 
	VALUES (DEFAULT,$1)
	RETURNING *;
	`, [noteId])
	.then(data => {
		console.log("DATA:", data.rows)
		return data.rows[0];
	})
	.catch(err => {
		console.log(err)
	})
}

const deleteFromFavourites = (noteId) => {
	return db.query(`DELETE FROM favourites WHERE note_id = $1`, [noteId])
}

module.exports = {getFavoritedNotes, addFavorites, getFavs, deleteFromFavourites}