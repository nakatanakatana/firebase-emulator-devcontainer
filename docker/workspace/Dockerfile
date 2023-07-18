FROM mcr.microsoft.com/devcontainers/base

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& apt-get -y install openjdk-17-jre \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*

RUN curl -sL https://firebase.tools/bin/linux/latest > /usr/local/bin/firebase \
&& chmod a+x /usr/local/bin/firebase

USER vscode
RUN curl https://get.volta.sh | bash

RUN firebase setup:emulators:database \
&& firebase setup:emulators:firestore
