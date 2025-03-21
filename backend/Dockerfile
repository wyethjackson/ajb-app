# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies first for caching
COPY package.json package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the application port
EXPOSE 4000

# Run the app
CMD ["node", "index.js"]
