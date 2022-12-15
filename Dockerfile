FROM node
WORKDIR /app
COPY ./angular.json /app
COPY ./package.json /app
COPY ./src /app/src
COPY ./.angular /app
COPY ./tsconfig.json /app
COPY ./tsconfig.app.json /app
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
