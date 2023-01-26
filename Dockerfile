FROM node:16
LABEL maintainer peter@peterwongpp.com

#####################
# Server level setup
#####################

##################
# App level setup
##################

WORKDIR /src

COPY ./package*.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
