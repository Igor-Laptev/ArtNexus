const router = require('express').Router();
const ArtItem = require('../../components/ArtItem');
const { Art } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    // достаем body из объекта запроса req, из fetch запроса скрипта
    const { name, description, img } = req.body;
    // записываем в базу с всеми колонками 
    const art = await Art.create({
      name,
      description,
      img,
      user_id: res.locals.user.id,
      theme_id: 1,
    });
    // передаем в обьекте ответа res карточку и сообщение об успехе
    const html = res.renderComponent(ArtItem, { art }, { doctype: false });
    res.json({
      message: 'success',
      html,
    });
  } catch ({ message }) {
    res.json({ message: 'api add route' });
  }
});

module.exports = router;
