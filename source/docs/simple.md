---
title: Simple Deployment
---

Volto is a Node application that runs on your machine/server and listens to a port.

Once you are ready to deploy it, you should build it running:

``` shell
yarn build
```

The Volto configuration determines the external URL Volto will be served, so if you just issue this command, the build will get that values and build an static bundle with that values (PORT=3000, API_PATH=http://localhost:8080/Plone).

In order to make Volto work on a server under an specific DNS name, you must parametrize the build like:

``` shell
PORT=volto_node_process_port RAZZLE_API_PATH=https://mywebsite.com/api yarn build
```

After the build, the bundle is created in /build folder, then in order to launch your application you can run:

``` shell
yarn start:prod
```

or

``` shell
NODE_ENV=production node build/server.js
```

This will start Volto in the PORT specified in the build command, and will issue internal API queries to the RAZZLE_API_PATH specified as well.

The simplest deployment is to start this node process in your server by any mean of your choice (systemd, process manager, etc) and manage its lifecycle.