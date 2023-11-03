# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

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
CMD [ "npm", "run", "serve", "--", "--port", "5173" ]
