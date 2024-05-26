# GreenLambdaSQATasks

## Description

This repository contains automated test cases for the modules located in the admin, organization, and devices tabs of netbox DCIM (task1) and Postman collection for (task2). The tests (task1) are implemented using Cypress and follow the Page Object Model design pattern. 

## Setup

1. Run `npm ci` to install the necessary dependencies.
2. Configure the end-to-end environment by running `npx cypress open`.

## Running Test Cases

- To run test cases in headed mode, use: `npx cypress run --headed`.
- To run test cases without headed mode, simply use: `npx cypress run`.

## Project Structure

- **e2e**: Contains all the spec files.
- **fixtures**: Contains data for tenants, users, and groups.
- **pages**: Houses page classes implementing the Page Object Model.
- **utils**: Includes utility functions.

## Postman Collection

The **Postman** folder contains a collection and test scripts for task 2. To view the collection, import it into Postman.
