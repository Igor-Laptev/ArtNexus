const { User } = require('../db/models');

async function getUser(req, res, next) {
  //   if (res.locals.user) {
  const user = await User.findOne({
    where: { id: 1 },
    attributes: ['name', 'id'],
  });
  res.locals.user = user;
  //   }
  next();
}

module.exports = getUser;
