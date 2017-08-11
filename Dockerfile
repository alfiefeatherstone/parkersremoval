FROM node:6.11-alpine

ENV NODE_ENV=production

WORKDIR /app
ADD package.json .
RUN npm i

ADD build/src src
ADD build/server.js  index.js

CMD node index.js
