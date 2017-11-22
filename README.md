# egg-core-pull-129

## Installation

``` bash
$ cd egg-core-pull-129
$ npm install
```

## Configure MySQL

Please configure mysql connection parameters. (empty database just does well)

Edit the file: `src/backend/config/config.default.js`
``` javascript
  // mysql
  config.mysql = {
    clients: {
      // donot change the name  
      __ebdb: {
        host: '127.0.0.1',
        port: '3306',
        user: 'travis',
        password: '',
        database: 'egg-born',
      },
    },
  };
```

## Run

### Start Backend Dev Service
``` bash
$ npm run dev:backend
```

This will work normallly.

### Start Backend Prod Service
``` bash
$ npm run start:backend
```

This will not work, and throw such error:
> throw new Error(`Can not find plugin ${name} in "${lookupDirs.join(', ')}"`);
>   egg-core-pull-129/node_modules/egg-core/lib/loader/mixin/plugin.js:345
