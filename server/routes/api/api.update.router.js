const router = require('express').Router();
const { Art } = require('../../db/models');

router.put('/:artId', async (req, res) => {
  try {
    const { artId } = req.params;
    const { name, description, img } = req.body;
    const [result] = await Art.update(
      { name, description, img },
      { where: { id: artId } }
    );
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'unable to update' });
  } catch ({ message }) {
    res.json({ message: 'update router' });
  }
});

module.exports = router;
