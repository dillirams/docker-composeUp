FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:dilli03@localhost:5432/compose-practice"

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]