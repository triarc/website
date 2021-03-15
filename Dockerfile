FROM node:15-alpine as build

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY tsconfig.build.json .
COPY tsconfig.json .
COPY rollup.config.js .
COPY tailwind.config.js .
COPY postcss.config.js .
COPY public public
COPY src src
RUN npx routify -b
RUN npx rollup -c
RUN npx nest build


####################################
FROM node:15-alpine as runtime

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY --from=build /app/dist .
COPY --from=build /app/public public
CMD ["node", "main.js"]
