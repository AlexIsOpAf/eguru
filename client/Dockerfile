FROM node:14-alpine AS development
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "start"]