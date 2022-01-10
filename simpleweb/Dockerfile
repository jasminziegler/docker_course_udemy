# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# install some dependencies - on node.js we install with npm
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]
