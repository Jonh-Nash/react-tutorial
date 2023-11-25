FROM node:latest

COPY ./app/react-app/ ./

WORKDIR /usr/src/app/react-app

RUN npm install

CMD ["npm", "start"]
