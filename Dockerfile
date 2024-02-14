FROM node 
ENV NODE_ENV production
ENV DATABASE_URL postgres://postgres:postgres@31.129.48.243:5432/artnexus
WORKDIR /application
COPY ./client/dist ./dist
COPY ./server/package.json .
COPY ./server/package-lock.json .
RUN npm ci
COPY ./server .
EXPOSE 4000
CMD [ "npm", "start"]