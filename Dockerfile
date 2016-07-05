FROM nodesource/trusty:6.2.0

# Copy files
COPY . /app
WORKDIR /app

# Set env
ENV NODE_ENV dev

# Expose webserver
EXPOSE 8080/tcp

# Install node and dependencies
RUN npm i

ENTRYPOINT ["npm", "start"]
