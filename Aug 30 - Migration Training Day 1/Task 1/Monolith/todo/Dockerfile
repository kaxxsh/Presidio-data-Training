# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define environment variables (adjust as needed)
ENV MONGODB_URI=mongodb+srv://1234:1234@atlascluster.v7az4yg.mongodb.net/

# Build the Next.js application
RUN npm run build

# Start the application
CMD ["npm", "start"]
