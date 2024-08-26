# Use an official Node.js runtime as the base image with Node.js 18
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Update npm to a compatible version (npm 8)
RUN npm install -g npm@latest

# Clear npm cache
RUN npm cache clean -f

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React project
RUN npm run build

# Expose port 5173
EXPOSE 5173

# Define the command to start the application
CMD [ "npm", "run", "dev", "--", "--port", "5173" ]
