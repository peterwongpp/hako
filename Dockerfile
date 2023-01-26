FROM node:16
LABEL maintainer peter.wong@tvb.com

#####################
# Server level setup
#####################

##################
# App level setup
##################

ENV APP_HOME /src
RUN mkdir -p $APP_HOME
COPY ./src/ $APP_HOME/

WORKDIR $APP_HOME

RUN npm install
