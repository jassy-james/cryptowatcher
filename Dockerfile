FROM node:18-alpine

WORKDIR /app

COPY . /app

COPY package.json /app
COPY package-lock.json /app

RUN npm ci && npm run dev

EXPOSE 3000