FROM node:16-alpine AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm ci --omit=dev
COPY . .

ENTRYPOINT ["npm", "run", "start"]
