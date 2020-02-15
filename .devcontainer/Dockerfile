FROM alpine:latest

ARG USER_UID=1000
ARG USER_NAME=dev

RUN apk update && \
  apk add git bash nodejs npm sudo openssh && \
  rm -rf /var/cache/apk/*

RUN npm install -g commitizen cz-emoji @google/clasp 

RUN adduser -D -u ${USER_UID} -s /bin/bash ${USER_NAME} && \
  echo "${USER_NAME} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
RUN echo '{ "path": "cz-emoji" }' > /home/${USER_NAME}/.czrc && chown ${USER_NAME} /home/${USER_NAME}/.czrc