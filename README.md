Notes from Burt
---
In order to get final tutorial working:
- needed to ensure mongodb was installed properly.
- needed to clear cache: https://github.com/angular/angular-cli/issues/7334
    -  rm -rf node_modules
    -  rm package-lock.json
    -  npm cache verify
    -  npm install
- needed to complete all the code from the tutorial, not sure if there was a chicken-or-egg issues
- seems like my "npm install express body-parser --save" was incorrect
- ended up running "npm install --save @angular/cli @angular/compiler-cli", that was important

# MeanContaclistAngular2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
