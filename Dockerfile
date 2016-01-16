# x86 Enviorment for Ignition Website
FROM ubuntu:latest
MAINTAINER Alex Stubbs "alex@alexstubbs.com"

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get -qq update
RUN apt-get install -y nodejs npm

RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

COPY ./src /src

RUN cd /src; npm install

EXPOSE 80

WORKDIR /src

CMD ["nodejs", "app.js"]
