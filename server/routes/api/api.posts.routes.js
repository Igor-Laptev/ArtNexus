const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

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

//  ВЫВОД ВСЕХ ПОСТОВ

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User },
        { model: Comment },
        { model: Like },
        { model: Category },
        { model: Gallery, include: [{ model: Art }] },
      ],
    });
    res.status(200).json({ posts, message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// ВЫВОД ОДНОГО ПОСТА(ПРИ ПРОВАЛИВАНИИ)

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: [
        { model: User },
        { model: Comment },
        { model: Like },
        { model: Category },
        { model: Gallery, include: [{ model: Art }] },
      ],
    });
    res.status(200).json({ post, message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// УДАЛЕНИЕ ПОСТА

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.destroy({ where: { id } });
    if (deleted > 0) {
      res.status(200).json({ message: 'success' });
    }
  } catch (error) {
    res.status(500).json({ message: 'произошла ошибка при удалении' });
  }
});

// СОЗДАНИЕ ПОСТА

router.post('/', upload.array('files'), async (req, res) => {
  try {
    const user_id = 1;
    const { description, title, category_id } = req.body;
    const newPost = await Post.create({
      user_id,
      description,
      title,
      category_id,
    });

    const gallery = await Gallery.create({
      post_id: newPost.id,
    });
    const art = await Art.bulkCreate(
      req.files.map((file) => ({
        post_id: newPost.id,
        src: `/img/${file.originalname}`,
        gallery_id: gallery.id,
      }))
    );

    const post = await Post.findByPk(newPost.id, {
      include: [
        { model: User },
        { model: Comment },
        { model: Like },
        { model: Category },
        { model: Gallery, include: [{ model: Art }] },
      ],
    });
    res.status(201).json({ post, message: 'success' });
  } catch (error) {
    res.status(500).json({ message: 'произошла ошибка при создании' });
  }
});

// МОДЕРАЦИЯ ПОСТА (isModerated)

router.put('/:id/moderate', async (req, res) => {
  try {
    const { id } = req.params;
    const { isModerated } = req.body;
    const changed = await Post.update({ isModerated }, { where: { id } });
    if (changed > 0) {
      res.status(200).json({ message: 'success' });
    } else {
      res.status(500).json({ message: 'произошла ошибка при изменении' });
    }
  } catch (error) {
    res.status(500).json({ message: 'произошла ошибка при изменении' });
  }
});

// КОНТЕНТ 18+

router.put('/:id/isAdult', async (req, res) => {
  try {
    const { id } = req.params;
    const { isAdult } = req.body;
    const changed = await Post.update({ isAdult }, { where: { id } });
    if (changed > 0) {
      res.status(200).json({ message: 'success' });
    } else {
      res.status(500).json({ message: 'произошла ошибка при изменении' });
    }
  } catch (error) {
    res.status(500).json({ message: 'произошла ошибка при изменении' });
  }
});

module.exports = router;
