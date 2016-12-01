![Clarity](logo.png)

Clarity Seed
============
This is a seed project for Angular 2 applications using [Clarity](https://github.com/vmware/clarity). For more information on the Clarity Design System, visit the [Clarity website](https://vmware.github.io/clarity/).

We offer this seed project in two different build systems:

    A. Angular-CLI (master branch)
    B. SystemJS and Gulp (systemjs branch)

Getting started
----------------------------------

#### A. Angular-CLI based version

This seed version provides the following out of the box:

- Angular 2 application with [clarity-icons](https://www.npmjs.com/package/clarity-icons), [clarity-ui](https://www.npmjs.com/package/clarity-ui) and [clarity-angular](https://www.npmjs.com/package/clarity-angular) included
- Of course, all the goodies that come with [Angular-CLI](https://github.com/angular/angular-cli#generating-and-serving-an-angular2-project-via-a-development-server)


*Prerequisite*: Please install Angular-CLI by following [these instructions](https://github.com/angular/angular-cli#installation).

#### Installation

*Note*: Even though it's optional, we recommend you to use [yarn](https://yarnpkg.com/) instead of `npm install` for installing the dependencies.

```bash
git clone https://github.com/vmware/clarity-seed.git
cd clarity-seed

# install the project's dependencies
yarn # or run "npm install" 

# starts the application in dev mode and watches your files for livereload
ng serve
```

#### Using Angular-CLI
```bash
# generating a new component
ng g component my-new-component

# generating a new directive
ng g directive my-new-directive

# to learn more about Angular-CLI commands and their usages
ng help
```

For comprehensive documentation on Angular-CLI, please see their [github repository](https://github.com/angular/angular-cli).

#### Test and build scripts

```bash
# running unit tests
ng test

# running e2e tests
ng e2e

# dev build
ng build

# prod build
ng build --prod
```

## Documentation



For documentation on the Clarity Design System, including a list of components and example usage, see [our website](https://vmware.github.io/clarity).


#### B. SystemJS based version

This seed version provides the following out of the box:

- Angular 2 application with [clarity-icons](https://www.npmjs.com/package/clarity-icons), [clarity-ui](https://www.npmjs.com/package/clarity-ui) and [clarity-angular](https://www.npmjs.com/package/clarity-angular) included
- Development and production builds
- Unit test setup with [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/)
- Code coverage on unit tests with [Istanbul](http://gotwarlost.github.io/istanbul/)
- End-to-end test setup with [Protractor](http://www.protractortest.org/)
- Development server with browsersync
- SASS processor
- TSLint

#### Installation
*Note*: Even though it's optional, we recommend you to use [yarn](https://yarnpkg.com/) instead of `npm install` for installing the dependencies.
```bash
git clone -b systemjs https://github.com/vmware/clarity-seed.git
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
npm run test.e2e

# dev build
npm run build.dev

# prod build
npm run build.prod
```

## Documentation

For documentation on the Clarity Design System, including a list of components and example usage, see [our website](https://vmware.github.io/clarity).

#### Directory structure
```
.
├── README.md
├── gulpfile.js                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── karma-test-shim.js         <- shim for test runner
├── package.json               <- dependencies of the project
├── protractor.config.js       <- e2e tests configuration
├── src                        <- source code of the application
│   ├── app
│   │   └── components
│   │       └── <component>.component.html
│   │       └── <component>.component.scss
│   │       └── <component>.component.spec.ts
│   │       └── <component>.component.ts
│   │   └── app.component.html
│   │   └── app.component.scss
│   │   └── app.component.ts
│   │   └── app.e2e-spec.js    <- sample e2e spec file
│   │   └── app.module.ts
│   │   └── app.routing.ts
│   │   └── main.ts            <- boostrap file for the angular app
│   └── index.html
├── tsconfig.json              <- configuration of the typescript project
├── tslint.json                <- sample configuration file for tslint
└── yarn.lock
```


## Contributing

The Clarity project team welcomes contributions from the community. For more detailed information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The clarity-seed project is licensed under the MIT license.

## Feedback

If you find a bug or want to request a new feature, please open a [GitHub issue](https://github.com/vmware/clarity-seed/issues).
