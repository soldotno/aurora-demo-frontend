Aurora Core Frontend Demo
=========================

Demo implementation of a frontend conforming to [Aurora](https://github.com/soldotno/aurora-core) specifications.

Uses the Aurora application assembly framework provided by [aurora-core](https://github.com/soldotno/aurora-core) to render a frontend application as specified by an [Aurora api](https://github.com/soldotno/aurora-demo-api).


#### Install dependencies
* [Install node.js (7.9.0)](https://nodejs.org/)
* `npm install`

#### Development shellscript example:
```sh
#!/bin/sh
export PORT=3000
export HOSTNAME="localhost"
export DEBUG="*,-babel"
export NODE_ENV="development"
export API_URL="http://localhost:3001"

npm run develop
```

#### Production shellscript example:
```sh
#!/bin/sh
export PORT=3000
export HOSTNAME="localhost"
export DEBUG="*,-babel"
export NODE_ENV="production"
export API_URL="http://localhost:3001"

npm run build && npm start
```
