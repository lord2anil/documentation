# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Requirements

- [Task](https://taskfile.dev/#/)
- Yarn (classic)

## Installation

```console
task install
```

## Local Development

```console
yarn run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Commits

[Lefthook](https://github.com/evilmartians/lefthook) will run QA tests against changed files in the `/docs`
directory.
If tests are failing you will see that in your CLI.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Notes

- Use multiple sidebars one for volto/default one for classic UI
