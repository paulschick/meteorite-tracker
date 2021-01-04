# Unit Testing in Angular Pluralsight Course

I will follow along with this course, and run tests on my code.

- Isolated tests (isolated component, pipe, directive, service)
- Integration tests (components with their templates)
- Asynchronous code
- Maintainable tests

- [Unit Testing in Angular Pluralsight Course](#unit-testing-in-angular-pluralsight-course)
  - [Section 02 - Course Introduction](#section-02---course-introduction)
    - [Demo Application](#demo-application)
    - [About](#about)
  - [Testing Overview](#testing-overview)
    - [Automated Testing](#automated-testing)
  - [Mocking](#mocking)
    - [Types of Mocks](#types-of-mocks)
  - [Types of Unit Tests Available in Angular](#types-of-unit-tests-available-in-angular)
  - [Tools](#tools)
  - [Installing and Running the Demo](#installing-and-running-the-demo)
  - [Writing Our First Unit Test](#writing-our-first-unit-test)
  - [Running the Unit Test](#running-the-unit-test)
    - [package.json -> scripts](#packagejson---scripts)
  - [Writing Good Unit Tests](#writing-good-unit-tests)
    - [Techniques](#techniques)

## Section 02 - Course Introduction

The sections in this course are based around a specific type of test:

- Isolated Unit Tests
- Shallow Integration Tests
- Deep Integration Tests
- Testing DOM Interaction and Routing Components
- Advanced Topics  

I know that there will be useful stuff in here for this project.
It will be great to deliver a demo with at least some basic testing files in the repository that can be run after installing the app.  

This course is not **end-to-end testing**.
Most of these tools don't have anything to do with the framework.
The unit testing is specific to *Angular* applications.

### Demo Application

If I find it helpful, I can start or fork the course repository.  

[Course Repository](https://github.com/joeeames/PSAngularUnitTestingCourse)  

I'm sure it could be a good resource for writing tests.  

### About

One thing that I immediately like about this course is that he says *don't worry about the package versions*.
That's great because the other courses so far have said *only use these versions!!*  

## Testing Overview

### Automated Testing

- Unit testing
- End-to-end testing
- Integration or functional testing  

For the most part a *unit* is a single classes.
There are cases where a unit will be more than just a single class.

## Mocking

Important concept in unit testing. Makes sure that we are only testing one unit at a time.
Most units have dependencies. A lot of times a unit might use a service.  

In the test, we don't want to use the service.
Otherwise this would be more of an integration test.
The service might make HTTP calls, which we don't want to do in the unit test.  

We will provide a *mock* service.
This *looks* like the real service, but it allows us to have more control and insight into how the unit being tested (which is dependent on the service) is working.  

### Types of Mocks

**Dummies**: Objects that fill a place. Don't do much that is interesting.  

**Stubs**: An object with controllable behavior. We can determine what value is returned by a Stub, for examle.  

**Spies**: Object that keeps track of which of its methods were called, and details about those methods.  

**True Mock**: Objects which verify that they were used in exactly a specific way.
They can check that only a specific method was called, and called only once, and had specific parameters.
These are typically overkill for what a true Unit Test requires.  

## Types of Unit Tests Available in Angular

- Isolated
  - Exercise a single unit of code
- Integration
  - Create a module in which we put the code to be tested
  - Test in the context of an Angular module so that we can test it with its template
  - Shallow: test a single unit
  - Deep: test parent and child components together  

## Tools

CLI sets up:

- Karma: test runner
- Jasmine: tool for creating mocks, and making sure that the tests do what we want them to.  

There are other tools available too.

- Jest: library by Facebook
- Mocha/Chai: replacements for Jasmine
- Sinon: specialized mocking library (if Jasmine doesn't do all that you want)
- TestDouble: less-popular than Sinon
- Wallaby: paid service that is convenient
- Cypress: end to end, but moving toward integration

## Installing and Running the Demo

Walkthrough for the demo.  

After cloning the demo, you can rename it. I have it cloned into my Documents folder.  

```ps1
cd ./repository
npm install
npm start
# go to PORT 4200 for the running server
# end the webserver after verifying that it works
```

I'm installing this to so that I can follow along where it's difficult to do so with this application.

## Writing Our First Unit Test

My goal is to do this with my application.
I think I'll learn how it actually works by applying it to a real application that I've built and that I understand.  

src/app/first-app.spec.ts -> must have spec so that Karma knows that this file is a test.  

Describe function: Jasmine function. Allows us to group tests together. Takes string and callback function (for describing the test)  

The first test is really not testing anything.
But it shows the structure of a test.  

Arrange the initial state, change that state, and then assert that the new state is what we expect it to be.

## Running the Unit Test

### package.json -> scripts

The scripts show what is being run when you test the application.
`ng test` is what is run when you do `npm test`.

```ps1
npm test
```

This should run a test with Karma, and open up a browser showing the test.
Looks like it needs to build, at least for running the first test.
The output was `Executed 1 of 1 SUCCESS` and then it tells how long this took and some other details.
The browser is controlled by the automated test software.  

Keep the browser open with the console to keep running tests.  

The initial test is going to be deleted, so look at 01_first-test_example.md  

## Writing Good Unit Tests

Arrange: All necessary preconditions and inputs  

Act: on the object or class under test  

Assert: that the expected results have occured  

a test should be a complete story, all inside the `it()`.
It should be fairly obvious in how the test works.  

### Techniques

- Move less interesting setup into `beforeEach()`
- Keep critical setup within the `it()`
- Include Arrange, Act, and Assert inside the `it()`
