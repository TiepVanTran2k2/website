##### Dockerfile #####
## build stage ##
FROM node:22.5.1-alpine3.19 as build
RUN apk add --no-cache python3 make g++ && ln -sf python3 /usr/bin/python

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

## run stage ##
FROM nginx:alpine
RUN ls -a /run
#RUN rm -R /run -f #force delete if exists
#RUN mkdir /run
COPY --from=build /app/dist /run
COPY nginx.conf /etc/nginx/nginx.conf
