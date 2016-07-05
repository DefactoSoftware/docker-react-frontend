FROM node:latest

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install

# Build app
RUN npm run build

# Expose webserver
EXPOSE 8080

# Start server
CMD [ "npm", "run", "serve" ]
