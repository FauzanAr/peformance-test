FROM oven/bun:1.1.6-alpine

COPY package.json .
COPY jsconfig.json .
COPY index.js .

RUN bun install

EXPOSE 9000
CMD ["bun", "index.js"]