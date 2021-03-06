# Runroom UI

[![Netlify Status](https://api.netlify.com/api/v1/badges/81968905-ee26-4bdf-832a-58992927ac69/deploy-status)](https://app.netlify.com/sites/runroom-ui/deploys)

> UNDER DEVELOPMENT

This is an _accessible_, _cross-browser_ and _tested integrated_ Component's library for building customized web interfaces quickly.

This components are shown on this other project called [ui-app](https://github.com/Runroom/ui-app)

---

## Project's structure

There's three main folders:

```
.
├── api
├── packages
│   └── ui
└── web
```

|  Directory  |  Description                                                   |
|-------------|----------------------------------------------------------------|
|  api        |  API with express allows us to obtain components from `ui` folder, done in _Twig_ |
|  packages   |  Initial structure for lerna mono repositories |
|  ui         |  Twig based component's library |
|  web        |  Basic web to visualize components, documentation, etc. It uses Next.js as React's framework |

## Installation and usage

**API should be executed same time as WEB.**
For now this is a work in progress and there's no stable version

### API
API initializes on port 5000

```
cd api
yarn install
yarn run server
```

### Web
WEB initializes on port 3000 and has port 5000 (API) dependency

```
cd web
yarn install
yarn run dev
```

### Dependencies
[PureJS](https://github.com/Runroom/purejs) will be a dependency for components when they require any of the support functions available in the library.

### Conventions
We've created a [convention's document](conventions.md) for this project's code.
