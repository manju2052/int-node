FROM node:10
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["node","index.js"]