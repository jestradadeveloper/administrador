FROM node:18.13.0
#user folder app
WORKDIR /app
#copy files
COPY ./package.json ./package.json
COPY ./public ./public
COPY ./src ./src
#install dependencies
RUN yarn install

#expose port for api
EXPOSE 3000

#run app
CMD yarn start
