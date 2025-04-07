# Base Node.js image
FROM node:18

# Create app directory inside container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Default command to run all files
CMD ["npm", "run", "start"]
