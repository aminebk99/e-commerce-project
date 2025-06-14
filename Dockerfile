# Use an official Node.js runtime as the base image with Node.js 18
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Clear npm cache (optional, not necessary but safe)
RUN npm cache clean --force

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React project (you can remove this if running in dev mode only)
RUN npm run build

# Expose port 5173
EXPOSE 5173

# Define the command to start the application
CMD [ "npm", "run", "dev", "--", "--port", "5173" ]
