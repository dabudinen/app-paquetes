FROM node:18
WORKDIR /srv/www/app
COPY package*.json ./
ADD src /srv/www/app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

# podman build . -t j/my-app
# podman run -p 3000:3000 -d j/my-app