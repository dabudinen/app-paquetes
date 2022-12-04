FROM node:19-alpine
WORKDIR /srv/www/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node -r dotenv/config", "build/index.js" ]

# podman build . -t j/my-app
# podman run -p 3000:3000 -d j/my-app