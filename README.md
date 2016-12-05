![Clarity](logo.png)

Clarity Seed
============
This is a seed project for Angular 2 applications using [Clarity](https://github.com/vmware/clarity). For more information on the Clarity Design System, visit the [Clarity website](https://vmware.github.io/clarity/).

We offer this seed project in three different build systems:

1. Angular-CLI version (branch: master)

2. **Webpack 2 version (branch: webpack)**

3. SystemJS version (branch: systemjs)

Getting started
----------------------------------

#### Webpack 2 version

This seed version provides the following out of the box:

- Angular 2 application with [clarity-icons](https://www.npmjs.com/package/clarity-icons), [clarity-ui](https://www.npmjs.com/package/clarity-ui) and [clarity-angular](https://www.npmjs.com/package/clarity-angular) included
- Development and production builds
- Unit test setup with Jasmine and Karma
- End-to-end test setup with Protractor
- Development server with `webpack-dev-server`
- SASS processor
- TSLint

#### Installation
*Prerequisite*: Please install Webpack 2 by following [these instructions](https://github.com/angular/Webpack 2#installation).
*Note*: Even though it's optional, we recommend you to use [yarn](https://yarnpkg.com/) instead of `npm install` for installing the dependencies.

```bash
git clone -b webpack https://github.com/vmware/clarity-seed.git
cd clarity-seed

# install the project's dependencies
yarn # or run "npm install"

# starts the application in dev mode and watches your files for livereload
npm start
```

#### Test and build scripts

```bash
# running unit tests
npm test

# running e2e tests
npm e2e

# production build
npm run build
```

Before running the e2e tests make ssure you are serving the app via `npm start`.

## Documentation

For comprehensive documentation on Webpack 2, please see their [website](https://webpack.js.org/).

For documentation on the Clarity Design System, including a list of components and example usage, see [our website](https://vmware.github.io/clarity).


#### Directory structure
```
.
├── README.md
├── karma.conf.js              <- configuration of the test runner
├── karma-shim.js              <- shim for test runner
├── package.json               <- dependencies of the project
├── protractor.config.js       <- e2e tests configuration
├── config/                    <- our configuration
|   ├── helpers.js             <- helper functions for our configuration files
│   ├── webpack.dev.js         <- our development webpack config
│   ├── webpack.prod.js        <- our production webpack config
│   └── webpack.common.js      <- our common config for development and production
├── src/                       <- source code of the application
│   ├── app/
│   │   └── <component>.component.html
│   │   └── <component>.component.scss
│   │   └── <component>.component.spec.ts
│   │   └── <component>.component.ts
│   │   └── app.component.html
│   │   └── app.component.scss
│   │   └── app.component.ts
│   │   └── app.component.spec.ts
│   │   └── app.module.ts
│   │   └── app.routing.ts
│   │   └── index.ts
│   ├── public/
│   │   └── images/
│   │   └── index.html
│   ├── polyfills.ts           <- our polyfills file
│   ├── vendor.ts              <- our vendor file
│   └── main.ts                <- boostrap file for the angular app
├── protractor.conf.js         <- protractor config for our end-to-end tests
├── tsconfig.json              <- configuration of the typescript project
├── tslint.json                <- sample configuration file for tslint
└── webpack.config.js          <- webpack main configuration file
└── yarn.lock
```

## Contributing

The Clarity project team welcomes contributions from the community. For more detailed information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The clarity-seed project is licensed under the MIT license.

## Feedback

If you find a bug or want to request a new feature, please open a [GitHub issue](https://github.com/vmware/clarity-seed/issues).
