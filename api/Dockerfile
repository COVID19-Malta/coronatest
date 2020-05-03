FROM node:12-alpine

RUN apk update
RUN apk add bash vim

run apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python3 && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet

ARG node_env_var=production
ENV NODE_ENV $node_env_var

ENV DB_ENV live
ENV PORT 3000

EXPOSE 3000

RUN mkdir /opt/app
WORKDIR /opt/app

COPY ./package.json /opt/app
RUN npm install

RUN apk del native-deps

COPY . /opt/app

COPY ./docker-entrypoint.sh /opt/app
RUN chmod +x /opt/app/docker-entrypoint.sh

ENTRYPOINT ["/opt/app/docker-entrypoint.sh"]