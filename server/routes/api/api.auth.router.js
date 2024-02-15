const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const cookieConfig = require('../../middleware/cookiesConfig');
const jwtConfig = require('../../middleware/configJWT');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/avatars');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post('/registration', async (req, res) => {
  try {
    const { name, email, avatar, password, rpassword } = req.body;
    if (password !== rpassword) {
      res.status(400).json({ message: 'Check passwords' });
      return;
    }

    if (name && email && avatar && password && rpassword) {
      let user = await User.findOne({ where: { email } });
      if (!user) {
        user = await User.create({
          name,
          email,
          avatar,
          isAdmin: false,
          password: await bcrypt.hash(password, 10),
        });
        res.status(201).json({ message: 'true', user });
      } else {
        res
          .status(409)
          .json({ message: `This user: ${email}, is already registered!` });
        return;
      }
    } else {
      res.status(405).json({ message: 'Fill in all the fields!' });
      return;
    }
  } catch ({ message }) {
    res.status(500).json({ message: 'Internal server error' });
    return;
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
        // await bcrypt.compare(password, user.password);
        // console.log('validate:', validate);

        if (validate) {
          const { accessToken, refreshToken } = generateTokens({
            user: {
              id: user.id,
              email: user.email,
              name: user.name,
            },
          });

          res
            .cookie(cookieConfig.access, accessToken, {
              maxAge: cookieConfig.access.maxAgeAccess,
              httpOnly: cookieConfig.httpOnly,
            })
            .cookie(cookieConfig.refresh, refreshToken, {
              maxAge: cookieConfig.refresh.maxAgeRefresh,
              httpOnly: cookieConfig.httpOnly,
            })
            .json({ login: true, user });

          return;
        }
        res.json({ message: 'Wrong login/password!' });
        return;
      }
      res.json({ message: 'User not found!' });
      return;
    }
    res.json({ message: 'Fill in all the fields!' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/check', async (req, res) => {
  // console.log('res.locals.user:', res.locals.user);
  if (res.locals.user) {
    const user = await User.findOne({ where: { id: res.locals.user.id } });
    res.json({ user });
    return;
  }
  return res.json({ message: 'User not found!' });
});

router.get('/logout', (req, res) => {
  res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
  res.json({ message: 'success' });
});

router.put('/avatar', upload.array('avatar'), async (req, res) => {
  try {
    const id = res.locals.user.id;
    console.log('id:', id);
    const avatar = req.files[0];
    console.log(avatar.originalname);
    const changed = await User.update(
      { avatar: `/avatars/${avatar.originalname}` },
      { where: { id } }
    );
    console.log(`/avatars/${avatar.originalname}`);
    if (changed > 0) {
      res.status(200).json({ id, avatar: `/avatars/${avatar.originalname}` });
    } else {
      res.status(500).json({ message: 'произошла ошибка при изменении' });
    }
  } catch (error) {
    res.status(500).json({ message: 'произошла ошибка при изменении' });
  }
});

module.exports = router;
