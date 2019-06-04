# Installation

[[toc]]

## Requirements

Pangaso has a few requirements you should be aware of before installing:

-  Node.js 8.0.0 and above
-  Npm 5.0.0 and above

## Browser Support

Pangaso supports reasonably recent versions of the following browsers:

-   Google Chrome
-   Apple Safari
-   Microsoft Edge

## Installing Pangaso
Pangaso is available as a free, open source npm package . You can install it using yarn or npm.

```js
yarn add pangaso
// Or using npm
npm install pangaso
```

## Setting up the server
Pangaso runs as an express server. Create an `index.js` where the Pangaso server will be configured.

```js

const { Pangaso } = require('pangaso')

new Pangaso()
    .onPort(5044)
    .mongo('mongodb://localhost/pangaso', 'pangaso')
    .start()
```

- The `onPort` method configures what port the server will be run on.
- The `mongo` method takes in the connection uri to the mongodb database and the name of the database.
- The `start` method starts the server.

Run the script with `node index.js` to start the server.

## Bug Reports
If you discover a bug in Pangaso, please open an issue on the [Pangaso GitHub repository](https://github.com/bahdcoder/pangaso).
