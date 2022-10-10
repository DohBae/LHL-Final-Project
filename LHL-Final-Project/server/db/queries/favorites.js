const db = require('../../configs/db.config');

const getFavoritedNotes = () => {
	return db.query("SELECT * FROM notes INNER JOIN favourites ON notes.id = favourites.note_id ;").then(data => {
		return data.rows;
	})
}


module.exports = {getFavoritedNotes}