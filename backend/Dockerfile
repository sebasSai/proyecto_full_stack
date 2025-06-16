FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .
RUN npm run build

ENV NODE_ENV=production
EXPOSE 4000
CMD ["npm","start"]
