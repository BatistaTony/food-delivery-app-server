FROM node:alpine as builder

WORKDIR /delivery_app_server

COPY ./package.json ./food_delivery_app_server

RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]