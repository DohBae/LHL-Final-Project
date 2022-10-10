// routes that map to the same routes that are defined on the client side. deliniates how logic will be separated
// Front end needs to talk to the same routes as the back end

const router = require('express').Router();
const users = require('../db/queries/users');
const notes = require('../db/queries/notes');
const ratings = require('../db/queries/ratings');
const classes = require('../db/queries/classes');
const favorites = require('../db/queries/favorites')


router.get('/users', (req, res) => {
  users.getAllUsers().then(data => {
    res.json({users: data});
  })
});

router.get('/users/:id', (req, res) => {
  users.getUserById(req.params.id).then(data => {
    res.json({userData: data});
  })
});


router.get('/notes', (req, res) => {
  notes.getAllNotes().then(data => {
    res.json({notes: data});
  })
});

router.get('/notes/:id', (req, res) => {
  notes.getNotesForUser(req.params.id).then(data => {
    res.json({userNotes: data});
  })
});


router.get('/classes', (req, res) => {
  classes.getAllClasses().then(data => {
    res.json({classes: data});
  })
});


router.get('/ratings/:id', (req, res) => {
  ratings.getRatingsForNote(req.params.id).then(data => {
    res.json({noteRating: data});
  })
});

router.get('/favorites', (req, res) => {
  favorites.getFavoritedNotes().then(data => {
    res.json({favorites: data})
  })
})

router.post('/notes', (req, res) => {
  console.log("posting test")
  console.log(req.body)
   notes.addNotes(req.body).then(data => {
    res.json(data)
   })
});

router.post('/notes/edit/:id', (req, res) => {
  console.log("editing test")
  console.log(req.body,req.params.id)
  notes.editNotes(req.body, req.params.id).then(data => {
    res.json(data)
  })
});


router.post('/notes/delete/:id', (req, res) => {
  console.log("deleting test")
  console.log(req.params)
  notes.deleteNote(req.params.id).then(data => {
    res.json({userNotes: data})
  })
});

// login route, place for front in to post to
router.post('/api/login', (req, res) => {
  users.getUserByEmail(req.body.email)
  .then(data => {
    if (req.body.password !== data.password) {
      return res.status(400).json({success: false})
    }
    delete data.password
    res.json({success: true, user: data})
  })
});

// register route
router.post('/api/register', (req, res) => {
  if (users.getUserByEmail(req.body.email).length > 0) {
    return res.json({message: "Email already registered. Please sign in"})
  } 
  users.addUser(req.body)
  .then(data => {
      return res.json({success: true, user: data})
  })
});

  
module.exports = router;