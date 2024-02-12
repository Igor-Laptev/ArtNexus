// utils/authUtils.js
const jwt = require('jsonwebtoken');
const jwtConfig = require('../middleware/configJWT');

const generateTokens = (user) => {
  if (!user.id || !user.email) {
    throw new Error('Invalid user data for token generation');
  }

  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
  };

  if (!process.env.ACCESS_TOKEN_SECRET || !process.env.REFRESH_TOKEN_SECRET) {
    throw new Error('Secret keys are not defined in .env');
  }

  return {
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: jwtConfig.access.expiresIn,
    }),
    refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: jwtConfig.refresh.expiresIn,
    }),
  };
};

module.exports = generateTokens;
