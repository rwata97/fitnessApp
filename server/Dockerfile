#  Dockerfile for Node Express Backend

FROM node

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /app

# Install Dependencies
COPY package.json .

RUN npm install 

# Copy app source code
COPY . .

# Exports
EXPOSE 80

CMD ["npm","start"]