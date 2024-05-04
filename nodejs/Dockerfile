FROM node:14.18.3-alpine

COPY package.json .
COPY server.js .

RUN npm install

EXPOSE 9000
CMD ["node", "server.js"]