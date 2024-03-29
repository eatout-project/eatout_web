FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-dev
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/eatout_web/ /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
