const router = require('express').Router();
const { Post, Category } = require('../../db/models');

//  ВЫВОД ВСЕХ КАТЕГОРИИ

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{ model: Post }] });
    res.status(200).json({ categories, message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
