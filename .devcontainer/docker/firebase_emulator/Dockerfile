FROM oven/bun

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
&& apt-get -y install openjdk-17-jre curl \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*
RUN curl -sL https://firebase.tools/bin/linux/latest > /usr/local/bin/firebase \
&& chmod +x /usr/local/bin/firebase

USER bun
WORKDIR /firebase_emulator
RUN mkdir /firebase_emulator/node_modules

RUN curl -sL https://get.volta.sh | bash

RUN firebase setup:emulators:database \
&& firebase setup:emulators:firestore \
&& firebase setup:emulators:pubsub \
&& firebase setup:emulators:storage \
&& firebase setup:emulators:ui \
&& rm /home/bun/.cache/firebase/emulators/*.zip 
