FROM node:8.11
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3800:3800
CMD [ "node", "app.js" ]
