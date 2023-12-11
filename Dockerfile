# Use a Node.js base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the entire project files to the working directory
COPY . .

# Build the React app
RUN yarn build

# Expose port 3000 (assuming your React app runs on this port)
EXPOSE 3000

# Set the command to start the app
CMD ["yarn", "start"]
