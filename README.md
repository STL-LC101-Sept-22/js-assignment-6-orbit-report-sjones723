# Orbit Report

## What You Need to Know About Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Assignment Requirements 

For this assignment, you are asked to use Angular to create a
sortable, searchable table that displays fetched satellite information. The
output from the program will look similar to the [demo app](http://orbit-report-launchcodeeducation.s3-website-us-east-1.amazonaws.com/).

## How Your Assignment is Graded

### Grading Tests

To run the unit tests, use the command `ng test`. This will launch Karma, the test runner.
A passing assignment will have 11 passing specs.

If you believe you have everything correct and do not have 11 passing specs, reach out to your TA for assistance!

### Beyond the Tests

After running the tests, your TA will check your code for the following:

1. Does your project display the data shown in the demo app?

   a. The satellite data should be from the fetch request, rather than from
      the hard-coded starter array. (No "Weber Grill"!)
   b. The Satellite Counts component displays a total number of `9`.
   c. The "Space Debris" cell under the "Type" column should be highlighted red. 

1. That the search and sort features work.

    a. If they click on the "Name" heading, are the satellites sorted
    alphabetically? What happens when they click the "Type" heading? 
   
    b. Is the search functionality case-insensitive and does it correctly
    filter the data displayed in the table based on the "Name" passed in? What happens if they empty the search box and hit "Enter"?

1. Verify that the numbers change when a search filters the table.

When you are done with the assignment, submit the link to your repository on Canvas.

