# Angular Blueprint

A detailed guide to development in Angular.

## Prerequisites

### 1. Installing Angular CLI

## About the repository

This repo contains the source code and documentation for the Angular Blueprint project. It provides a detailed guide to development in Angular, covering various topics and best practices.

## Folder Structure

The repository follows a standard Angular project structure:

```bash
├── src/
│ ├── app/
│ │ ├── dashboard/
│ │ ├── root/
│ │ └── app.module.ts
│ │
│ ├── assets/
│ │
│ ├── index.html
│ ├── main.ts
│ └── styles.sass
│
├── public/
│ └── ...
│
├── node_modules/
│ └── ...
│
├── angular.json
├── package.json
└── README.md
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

### 1. Generating Modules

Run `ng generate module Objects` to generate a new module, `Objects`.

### 2. Generating Components

Run `ng generate component Home` to generate a new component, `Home`.

### 3. Generating Components within Modules

Run `ng generate component Objects/Edit` to generate a new component `Edit` within the `Objects` module

### 4. Other Operations

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

> generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.
