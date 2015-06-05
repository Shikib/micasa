var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'micasa'
    },
    port: 3000,
    db: 'mysql://root:password@localhost/micasa'
  },

  test: {
    root: rootPath,
    app: {
      name: 'micasa'
    },
    port: 3000,
    db: 'mysql://localhost/micasa-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'micasa'
    },
    port: 3000,
    db: 'mysql://localhost/micasa-production'
  }
};

module.exports = config[env];
