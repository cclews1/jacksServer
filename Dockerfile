FROM node:14
WORKDIR /app

RUN npm i pm2 -g

COPY ./package*.json ./

RUN npm i

COPY . ./

RUN npm run build

EXPOSE 3000 443

CMD ["pm2-runtime", "start", "npm", "--", "start"]

