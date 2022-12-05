FROM node:19-alpine
WORKDIR /srv/www/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
COPY . .
ADD src /srv/www/app
ADD public /srv/www/app
CMD ["npm", "run", "dev"]