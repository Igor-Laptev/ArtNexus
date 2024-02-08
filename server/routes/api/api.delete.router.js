const router = require('express').Router();
const { Art } = require('../../db/models');

router.delete('/:artId', async (req, res) => {
  try {
    const { artId } = req.params;
    const result = await Art.destroy({ where: { id: artId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'unable to delete, delete router' });
  } catch ({ message }) {
    res.json({ message: 'delete router' });
  }
});

module.exports = router;
