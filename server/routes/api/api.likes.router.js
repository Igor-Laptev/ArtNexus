const router = require('express').Router();
const { Like } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { postId } = req.body;
    const userId = res.locals.user.id;
    let like;
    const existingLike = await Like.findOne({ where: { post_id: postId, user_id: userId } });
    if (existingLike) {
      await Like.destroy({ where: { post_id: postId, user_id: userId } });
      like = existingLike;
      console.log(like, '1');
      res.json(like);
    } else {
      like = await Like.create({ post_id: postId, user_id: userId });
      console.log(like, '2');
      res.json(like);
    }
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
