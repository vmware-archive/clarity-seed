![Clarity](logo.png)

Clarity Seed
============
This is a seed project for Angular 2 applications using [Clarity](https://github.com/vmware/clarity). For more information on the Clarity Design System, visit the [Clarity website](https://vmware.github.io/clarity/).

This seed's build system is written with gulp and provides the following out of the box:

- Angular 2 application with [clarity-icons](https://www.npmjs.com/package/clarity-icons), [clarity-ui](https://www.npmjs.com/package/clarity-ui) and [clarity-angular](https://www.npmjs.com/package/clarity-angular) included
- Development and production builds
- Unit test setup with Jasmine and Karma
- End-to-end test setup with Protractor
- Development server with browsersync
- SASS processor
- TSLint

Getting started
---------------
#### Installation
These are the steps to run the seed project:
```
git clone git@github.com:vmware/clarity-seed.git
cd clarity-seed

# install the project's dependencies
npm install

# starts the application in dev mode and watches your files for livereload
npm start

# running unit tests
npm run test.unit

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
│   │       └── app.e2e-spec.js                 <- sample e2e spec file
│   │       └── <component>.component.spec.ts
│   │       └── <component>.component.ts
│   │       └── <component>.html
│   │       └── <component>.scss
│   │   └── app.html
│   │   └── app.spec.ts
│   │   └── app.ts
│   │   └── main.ts            <- boostrap file for the angular app 
│   └── index.html
├── .editorconfig              <- configuration file for IDEs
├── tsconfig.json              <- configuration of the typescript project
├── tslint.json                <- sample configuration file for tslint
└── typings.json
```


## Contributing

The Clarity project team welcomes contributions from the community. For more detailed information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The clarity-seed project is licensed under the MIT license.

## Feedback

If you find a bug or want to request a new feature, please open a [GitHub issue](https://github.com/vmware/clarity-seed/issues).