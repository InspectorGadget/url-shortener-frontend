FROM node:12-alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npm install -g @ionic/cli

EXPOSE 8100

CMD ["ionic", "serve", "--", "--host=0.0.0.0", "--disable-host-check"]
