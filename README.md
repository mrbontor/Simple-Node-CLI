#Customer Loyalty Point

### Info
This is a simple Node CLI

use case: _Customer Loyalti Transaction Point_ 
database: `JSON`

### Requirements

- [Git](https://www.odoo.com/documentation/15.0/contributing/
- [Node JS >= 14.15](https://nodejs.org/en/blog/release/v14.17.3/)
- [Commander JS](https://www.npmjs.com/package/commander)
- [Chai](https://github.com/chaijs/chai) --devD
- [Jest](https://github.com/facebook/jest) --devD
- [Sinon](https://github.com/sinonjs/sinon) --devD


### Structure

#### Directory Structure

Every `folder` and `subfolder` have an `index.js` as modular exporter to make easier for `managing` and  `refactoring` and also for `unit test`.

```
.
├── /app
│   ├── /cli
│   │   ├── /order
│   │   ├── /transaction
│   │   ├── /user
│   │   └── index.js
│   ├── /helpers
│   │   ├── /exceptions
│   │   └── /response
│   ├── /libs
│   │   └── filename
│   └── /modules
│       ├── /controllers
│       │   ├── /order
│       │   ├── /transaction
│       │   ├── /user
│       │   └── index.js
│       ├── /repositories
│       │   ├── /order
│       │   ├── /transaction
│       │   ├── /user
│       │   └── index.js
│       └── /services
│           ├── /order
│           ├── /transaction
│           ├── /user
│           └── index.js
├──/db (example db)
├── ...file configuration
├── ...file configuration
├── ...file configuration
└── index.js
```

##### Module Description :

The main functions is located in `./app/modules`;

- [Cli](./app/cli/)
        - is used to handle and manage `command line` for each [controllers](./app/modules/controller/)
        - more easier to modify and to customize `cli` for each controller function
- [Controllers](./app/modules/controller/)
        - is used to handle any payload and route and will be forwarded to [services](./app/modules/services/) 
        - can only communicate with [services](./app/modules/services/)
- [Services](./app/modules/services/)
        - is used to handle business logic.
        - can communicate to [repositories](./app/modules/repositories/) and other [services](./app/modules/services/)
- [Repositories](./app/modules/repositories/)
        - is used to comunicate to database
        - can only communicate to [repositories](./app/modules/repositories/) to other [services](./app/modules/services/)

Same stucture for `Unit Test` in folder [test](./tests/)


### Settings & Configuring

There's no much configurations,
Mostly, settings put in file [package.json](./package.json)


This project is also use file `.env` to store `database location`, but this is _optional_ 
the thing is, how to implement [Best Practice](https://www.thinkful.com/blog/coding-best-practices/) 

database format:

```json
{
    "orders": [...],
    "users": [...],
    "transactions": [...]
}
```

#### Deployment && Usages

By default, you can run this service following command below:

```sh
# install dependencies, mandatory
$ npm install

# run app
$ node index.js <command> [options]

# orr
$ ./index.js
```

this command will print the details how to use.

For better experience, i will suggest to run `npm link`. (No need /bin folder)

Noted: _this project using alias name, [clp](./package.json)._

```sh
# install to local dependencies
$ npm link

# run app
$ clp

# example:
$ clp point -c `bruce_banner`
```

to remove link,

```sh
$ npm unlink
```

output and Available commands:

```sh
Usage: customer-loyalty-point|clp [options] [command]

CLI Calculator Customer Loyalty Point

Options:
  -V, --version                  output the version number
  -h, --help                     display help for command

Commands:
  point|p [options]              Get loyalty point customer
  transactions|t                 Print total amount transactions
  orders|o [options] <customer>  Print list orders of customers
  users|u                        Print list customers
  help [command]                 display help for command
```



#### Unit Test

By default, you can run this service following command below:

```sh
$ npm test
```

Noted: _this command has configured print the coverage as well._

find more for detail in [pacakage.json](./package.json)
