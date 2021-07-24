---
title: Install
description: How to install Plone
meta:
  - name: "og:description"
    content: How to install Plone
  - name: keywords
    content: How to install Plone
tags:
  - install
  - node
  - docker
---

<Header/>

---

## Requirements

- [Node.js LTS (14.x)](https://nodejs.org/ "Link to Node.js website")
- [Python 3.7.x / 3.8.x](https://python.org/ "Link to Python website")

We also have [Docker](https://www.docker.com/get-started "Link to Docker webiste") images.

::: warning Note
Add here link to images on Docker Hub, link to Docker docs below
:::

::: tip
Add note that we suggest to use nvm (link to it)
:::

## Docker

When you have installed Docker, you can run an standard Plone Docker container with the proper configuration for Volto using the kitconcept.volto add'on right away by issuing:

```shell
docker run -it --rm --name=plone \
  -p 8080:8080 -e SITE=Plone -e ADDONS="kitconcept.volto" \
  -e ZCML="kitconcept.volto.cors" \
  -e PROFILES="kitconcept.volto:default-homepage" \
  plone
```

::: warning Note
Explain the example above and add a better and more secure example of
"The example above does not persist yet any changes you make through Volto in the Plone docker container backend! For this you need to map the /data directory in the container properly. Check Docker storage documentation for more information.

As a quick example: if you add --mount type=bind,source="$(pwd)/plone-data",target=/data to the previous example. The local subdirectory plone-data relative to where you execute docker run will be use to persist the backend server data."
:::

