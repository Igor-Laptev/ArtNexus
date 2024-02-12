const jwtConfig = {
  access: {
    type: 'access',
    expiresIn: '5m',
  },
  refresh: {
    type: 'refresh',
    expiresIn: '12h',
  },
};

module.exports = jwtConfig;
