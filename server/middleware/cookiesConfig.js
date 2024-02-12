const configJWT = require('./configJWT');

const cookiesConfig = {
  refresh: 'refresh',
  access: 'access',
  httpOnly: true,
  maxAgeAccess: configJWT.access.expiresIn,
  maxAgeRefresh: configJWT.refresh.expiresIn,
};
module.exports = cookiesConfig;
