---
id: quickstart
title: Quickstart
sidebar_position: 1
---

All you need to know to get started.

---

## Installing Volto

Volto can be installed in any operating system assuming that this requirements
are met:

- [Node.js LTS (14.x)](https://nodejs.org/)
- [Python 3.7.x / 3.8.x](https://python.org/) or
- [Docker](https://www.docker.com/get-started) (if using the Plone/Guillotina
  docker images)

Depending on the OS that you are using some of the following might change, they
are assuming a MacOS/Linux machine:

## Install nvm (NodeJS version manager)

If you have a working nodejs development setup on your machine, this step is
not required. But it's a good idea to integrate nvm for development, as it
provides easy access to any Nodejs released version.

1. Open a terminal console and type:
```bash
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

2. Close the terminal and open a new one or execute:
```
source ~/.bash_profile
```

3. Test it:
```
nvm version
```

4. Install any active LTS version of NodeJS (https://nodejs.org/en/about/releases/):
```
nvm install 14.15.1
nvm use 14.15.1
```

5. Test NodeJS:
```
node -v
```