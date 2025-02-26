# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . .

# Install dependencies (for simplicity, assume there's a package.json)
RUN npm install

# Expose the port the app will run on
EXPOSE 8080

# Run the app
CMD ["npm", "start"]
