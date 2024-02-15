const router = require('express').Router();
const {
  User,
  Post,
  Gallery,
  Art,
  Comment,
  Like,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({
      include: [ 
       { model: Comment },
       { model: Like },
      { model: Post, include: [ { model: Gallery, include: [{ model: Art }] } ] },
      
      ],
    });
   
    res.status(200).json({ users, message: 'success' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
});

module.exports = router;