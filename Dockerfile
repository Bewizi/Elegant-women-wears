FROM node:22

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3030

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3030"]
