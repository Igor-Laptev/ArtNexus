const router = require('express').Router();
const bcrypt = require('bcrypt');
 const { User } = require('../../db/models');
// const generateTokens = require('../../utils/authUtils');
// const configJWT = require('../../middleware/configJWT');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, avatar, password, rpassword } = req.body;
    if (password !== rpassword) {
      res.status(400).json({ message: 'Check passwords' });
      return;
    }

    if (name && email && password && rpassword) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        await User.create({
          name,
          email,
          avatar: '/avatars/admin.jpeg',
          isAdmin: false,
          password: await bcrypt.hash(password, 10),
        });
        res.json({ reg: true });
      } else {
        res.json({ message: `This user: ${email}, is already registered!` });
      }
    } else {
      res.json({ message: 'Fill in all the fields!' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
