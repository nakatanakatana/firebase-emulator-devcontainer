FROM mcr.microsoft.com/devcontainers/base

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& apt-get -y install openjdk-17-jre \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*

USER vscode
RUN curl https://get.volta.sh | bash

WORKDIR /workspace
RUN mkdir /workspace/node_modules
