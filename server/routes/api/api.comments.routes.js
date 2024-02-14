const router = require('express').Router();
const {
  Post,
  User,
  Comment,
  Like,
  Category,
  Gallery,
  Art,
} = require('../../db/models');

//  ДОБАВЛЕНИЕ КОММЕНТАРИЯ

router.post('/', async (req, res) => {
  const user_id = res.locals.user.id;
  const { text, post_id } = req.body;
  console.log(text, post_id);
  const newComment = await Comment.create({ user_id, text, post_id });
  const comment = await Comment.findByPk(newComment.id, {
    include: [{ model: User }],
  });
  res.status(201).json({ comment, message: 'success' });
});

// УДАЛЕНИЕ КОММЕНТАРИЯ

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comment.destroy({ where: { id } });
    if (deleted > 0) {
      res.status(200).json({ message: 'success' });
    } else {
      res.status(500).json({ message: 'произошла ошибка при удалении' });
    }
  } catch (error) {
    res.status(500).json({ message: 'произошла ошибка при удалении' });
  }
});

module.exports = router;
