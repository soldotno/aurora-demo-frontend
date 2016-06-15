Aurora Core Frontend Demo
=========================

Demo implementation of a frontend conforming to [aurora-core](https://github.com/soldotno/aurora-core) specifications.

#### Install dependencies
* [Install node.js (5.x)](https://nodejs.org/)
* `npm install`

#### Development shellscript example:
```sh
#!/bin/sh
export PORT=3000 \
export HOSTNAME="localhost" \
export DEBUG="*,-babel" \
export NODE_ENV="development" \
export API_URL="http://localhost:3001" \

npm run develop
```

#### Production shellscript example:
```sh
#!/bin/sh
export PORT=3000 \
export HOSTNAME="localhost" \
export DEBUG="*,-babel" \
export NODE_ENV="production" \
export API_URL="http://localhost:3001" \

npm run build && npm start
```
