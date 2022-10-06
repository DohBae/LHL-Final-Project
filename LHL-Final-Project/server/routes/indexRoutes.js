// routes that map to the same routes that are defined on the client side. deliniates how logic will be separated
// Front end needs to talk to the same routes as the back end

const router = require('express').Router();
const users = require('../db/queries/users');
const notes = require('../db/queries/notes');
const ratings = require('../db/queries/ratings')



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

router.get('/ratings/:id', (req, res) => {
  ratings.getRatingsForNote(req.params.id).then(data => {
    res.json({noteRating: data});
  })
});

// login route, place for front in to post to
router.post('/api/login', (req, res) => {
  users.getUserByEmail(req.body.email)
  .then(data => {
    // console.log("USER: ", data)
    if (req.body.password === data.password) {
      res.json({success: true})
    } else {
      res.json({success: false})
    }
  })
});

// register route
router.post('/api/register', (req, res) => {
  // console.log("REQ: ", req.body)
  console.log("REQ BODY EMAIL: ", req.body.email)
  if (users.getUserByEmail(req.body.email).length > 0) {
    console.log("VERIFY")
    return res.json({message: "Email already registered. Please sign in"})
  } 
  users.addUser(req.body)
  .then(data => {
    console.log("DATA: ", data)
    console.log("USERS: ", users.getUserByEmail)
      return res.json({success: true})
  })

})
  
module.exports = router;