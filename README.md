# Star Wars Battleship
This react application provides the front-end for star wars battleship.

# Environment vars
Database

# Pre-requisites
- Install Node.js
- Install npm

# Getting started
- Clone the repository
```
git clone 
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:3000`

## Getting TypeScript
Add Typescript to project `npm`.
```
npm install -D typescript
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build.                            |
| **node_modules**         | Contains all npm dependencies                                                                 |
| **src**                  | Contains source code that will be compiled to the dist dir                                    |
| **src/app**           | Main react application folder
| **src/app/components**      | Components to be used in application. 
| **src/app/views**          | Views or layout components that will essentially be represented by router. 
| **src/app/styles**      | The styles for base and components
| **src/app/test**      | The test suite to test the react application. Includes setup for enzyme and mocks.
| **src/app/index.html**           | The entry point for application.                      
| **src/app/App.tsx**        | The main react application   |


## Variable Control
Consitency amongst file, function and variable names makes it easier to search the codebase when looking for a file, value, or function. It can quickly be understood based on the case, rather it's a function or variable if we follow these assignment rules.

- *File names* should be in kabob case and include the target file type: ex: hello-world.route.ts or hello-world.controller.ts
- *Function names* should be in lower camel case: ex: getPredictionData or updateUser
- *Variable names* should be in snake case: ex: prediction_data or first_name
- *Components, Views* should be Upper camel case.