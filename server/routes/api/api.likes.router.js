const router = require('express').Router();
const { Like } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { postId } = req.body;
    console.log(postId);
    const like = await Like.create({
      user_id: res.locals.user.id,
      post_id: postId,
    });
    res.json(like);
  } catch ({ message }) {
    res.json({ message: 'unable to like' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const dislike = await Like.destroy({ where: { id } });
    if (dislike > 0) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.json({ message: 'unable to dislike' });
  }
});

module.exports = router;