const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, avatar, password, rpassword } = req.body;
    if (password !== rpassword) {
      res.status(400).json({ message: 'Check passwords' });
      return;
    }

    if (name && email && avatar && password && rpassword) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        await User.create({
          name,
          email,
          avatar,
          isAdmin: false,
          password: await bcrypt.hash(password, 10),
        });
        res.status(201).json({ reg: true });
        console.log('reg:true', reg);
      } else {
        res
          .status(409)
          .json({ message: `This user: ${email}, is already registered!` });
      }
    } else {
      res.status(405).json({ message: 'Fill in all the fields!' });
    }
  } catch ({ message }) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log('req.body:', req.body);
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      // console.log('user:', user);
      if (user) {
        const validate = await bcrypt.compare(password, user.password);
        console.log('validate:', validate);

        if (validate) {
          const { accessToken, refreshToken } = generateTokens({
            user: {
              id: user.id,
              email: user.email,
              name: user.name,
            },
          });
          console.log('generateTokens:', generateTokens);
          return res
            .cookie(cookieConfig.access, accessToken, {
              maxAge: cookieConfig.access.maxAgeAccess,
              httpOnly: cookieConfig.httpOnly,
            })
            .cookie(cookieConfig.refresh, refreshToken, {
              maxAge: cookieConfig.refresh.maxAgeRefresh,
              httpOnly: cookieConfig.httpOnly,
            })
            .json({ login: true });
        }
        return res.json({ message: 'Wrong login/password!' });
      }
      return res.json({ message: 'User not found!' });
    }
    return res.json({ message: 'Fill in all the fields!' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
