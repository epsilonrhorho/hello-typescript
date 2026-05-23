FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npx tsc

CMD ["node", "index.js"]
