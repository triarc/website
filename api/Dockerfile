FROM node:20-alpine as build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY nest-cli.json .
COPY tsconfig.build.json .
COPY tsconfig.json .
COPY src src
RUN npm run build

####################################
FROM node:20-alpine as runtime

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --only=production

COPY --from=build /app/dist .
CMD ["node", "main.js"]
