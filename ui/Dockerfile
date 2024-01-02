# Dockerfile for API folder
FROM node:14-alpine

WORKDIR /ui

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]
