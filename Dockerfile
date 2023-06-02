FROM node:16.20.0

RUN npm install -g expo-cli && \
npm install -g serve@14.2.0

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

CMD ["npx", "serve", "web-build", "--single"]
