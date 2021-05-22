---
title: PM2
description: Use PM2
meta:
  - name: "og:description"
    content: PM2
  - name: keywords
    content: Plone Volto PM2
tags:
  - Volto
  - Plone
  - Pm2
---

<Header/>

[PM2](https://pm2.keymetrics.io/) is a popular and maintained process manager based in Node.

Create a file mywebsite.com.pm2.config.js in your repo or on your server.

:::warning Info

Make sure your pm2 config file sufix ends in `config.js`, otherwise PM2 will ignore it.

:::

``` js
module.exports = {
  apps: [
     {
       script: "/srv/mywebsite.com/build/server.js",
       name: "mywebsite.com-volto",
       cwd: "/srv/mywebsite.com"
     },
     {
       script: "/srv/mywebsite.com/api/bin/zeo",
       args: "fg",
       name: "mywebsite.com-api-zeo",
       cwd: "/srv/mywebsite.com",
       interpreter: "/srv/mywebsite.com/api/bin/python"
     },
     {
       script: "/srv/mywebsite.com/api/bin/instance1",
       args: "console",
       name: "mywebsite.com-api-instance1",
       cwd: "/srv/mywebsite.com",
       interpreter: "/srv/mywebsite.com/api/bin/python"
     },
     {
       script: "/srv/mywebsite.com/api/bin/instance2",
       args: "console",
       name: "mywebsite.com-api-instance2",
       cwd: "/srv/mywebsite.com",
       interpreter: "/srv/mywebsite.com/api/bin/python"
     }
    ]
};