FROM node:current-alpine
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev --ignore-scripts
COPY build/ .
RUN mkdir config
COPY config/ config
CMD ["npm", "start"]