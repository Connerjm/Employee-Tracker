# Employee Tracker

[![owner Owner](https://img.shields.io/badge/Owner-Connerjm-green)](https://github.com/connerjm)
[![tech Tech](https://img.shields.io/badge/Tech-NodeJS-blue)](https://github.com/topics/node-js)
[![tech Tech](https://img.shields.io/badge/Tech-MySQL-blue)](https://github.com/topics/mysql)
[![license License](https://img.shields.io/badge/License-Unlicense-orange)](https://www.opensource.org/licenses/unlicense)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Links](#links)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [License](#license)

## Description

This is a command line application for tracking employees. This will be done utilizing Node, Inquirer, and MySQL. Utilizing the application, the user will be prompted with a series of options, such as adding, altering, removing, or simplye viewing entries for employees, roles, or managers. All printed information uses console.table package to format the data nice and clean.

## Features

Users of this application are able to:

- [x] Add departments, roles, and employees.
- [x] View departments, roles, and employees.
- [x] Update employee roles.

------------------------Bonus----------------------------

- [x] Update employee managers.
- [x] View employees by manager.
- [x] Delete departments, roles, and employees.
- [x] View the total utilized budget of a deparment.

## Links

[GitHub Repo](https://github.com/Connerjm/Employee-Tracker)

## Usage

Install application.

```bash
git clone https://github.com/Connerjm/Employee-Tracker.git
```

Install dependencies.

```bash
npm i
```

Run application.

```bash
npm start
```

## Demonstration

Simple demo of a few of the features. Notice, it comes complete with validations and checks so you can't remove an entry that another entry realizes on.

![Demonstration](./assets/employee_tracker.gif)

## License

Employee Tracker is released under the [Unlicense](https://www.opensource.org/licenses/unlicense).
