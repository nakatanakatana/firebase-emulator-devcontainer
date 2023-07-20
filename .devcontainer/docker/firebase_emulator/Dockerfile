FROM node:20.4.0-slim

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& apt-get -y install openjdk-17-jre curl \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*
RUN curl -sL https://get.volta.sh | bash
RUN curl -sL https://firebase.tools/bin/linux/latest > /usr/local/bin/firebase \
&& chmod +x /usr/local/bin/firebase

RUN firebase setup:emulators:database \
&& firebase setup:emulators:firestore \
&& firebase setup:emulators:pubsub \
&& firebase setup:emulators:storage \
&& firebase setup:emulators:ui \
&& rm /root/.cache/firebase/emulators/*.zip 
