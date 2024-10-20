FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npx vite build --mode production

USER node

CMD ["npm", "run", "start"]

EXPOSE 3000
