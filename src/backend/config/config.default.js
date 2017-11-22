module.exports = appInfo => {
  const config = {};

  // keys
  config.keys = appInfo.name + '_1511318185258_6474';

  // module config
  config.modules = {
    'aa-hello': {
    },
  };

  // mysql
  config.mysql = {
    clients: {
      // donnot change the name
      __ebdb: {
        host: '127.0.0.1',
        port: '3306',
        user: 'travis',
        password: '',
        database: 'egg-born',
      },
    },
  };

  return config;
};
