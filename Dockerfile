FROM node:16.18.0

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "start:dev"]
