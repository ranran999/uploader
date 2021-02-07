FROM node:13.1.0-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 3003
VOLUME /usr/src/app/upload
CMD [ "node", "index.js" ]
