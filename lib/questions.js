/* Imports. */

const inquirer = require("inquirer");

/* Questions Functions. */

//Initial prompt asking the user what action they'd like to take.
async function defaultPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View all employees", "View all employees by department", "View all employees by manager", "Add employee", "Remove employee", "Update employee role", "Update employee manager", "View all roles", "Add role", "Remove role", "View all departments", "Add department", "Remove department", "Get budget for a department", "All done!"]
        }]);
    return answers;
}

//Asks the user which departments employees they'd like to view.
async function viewEmployeesByDepartmentPrompt(departments)
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "department",
            message: "Which departments employees would you like to view?",
            choices: departments
        }
    ]);
    return answers;
}

//Asks the user which managers employees they'd like to see.
async function viewEmployeesByManagerPrompt(managers)
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "manager",
            message: "Which managers employees would you like to view?",
            choices: managers
        }
    ]);
    return answers;
}

//Asks for info for the new user.
async function addEmployeePrompt(roles, managers)
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter the new employees first name."
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter the new employees last name."
        },
        {
            type: "list",
            name: "role",
            message: "Which role does this employee have?",
            choices: roles
        },
        {
            type: "list",
            name: "manager",
            message: "Who is this employees manager?",
            choices: [...managers, "N/A"]
        }
    ]);
    return answers;
}

//Asks the user which employee they'd like to remove.
async function removeEmployeePrompt(employees)
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employee do you wish to eliminate.",
            choices: employees
        }
    ]);
    return answers;
}

//Asks which employee they'd like to alter, and which role to change it to.
async function updateEmployeeRolePrompt(employees, roles)
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employees role would you like to update?",
            choices: employees
        },
        {
            type: "list",
            name: "role",
            message: "Select the new role for this employee.",
            choices: roles
        }
    ]);
    return answers;
}

//Asks which employee they'd like to alter, and which manager to set.
async function updateEmployeeManagerPrompt(employees, managers)
{
    let answers = inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employees manager do you wish to change?",
            choices: employees
        },
        {
            type: "list",
            name: "manager",
            message: "Which manager do you want to set?",
            choices: managers
        }
    ]);
    return answers;
}

//Asks for info for a new role.
async function addRolePrompt(departments)
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of this role?"
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "list",
            name: "department",
            message: "Which department is this role assossiated with?",
            choices: departments
        }
    ]);
    return answers;
}

//Selects a role to delete.
async function removeRolePrompt(roles)
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Which role would you like to remove from existance?",
            choices: roles
        }
    ]);
    return answers;
}

//Asks for info for a new department.
async function addDepartmentPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "Enter the name of the new department."
        }
    ]);
    return answers;
}

//Selects a department to delete.
async function removeDepartmentPrompt(departments)
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "department",
            message: "Which department would you like to remove?",
            choices: departments
        }
    ]);
    return answers;
}

//Asks for a department to see the total budget for.
async function getBudgetByDepartmentPrompt(departments)
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "department",
            message: "Which department would you like the total budget for?",
            choices: departments
        }
    ]);
    return answers;
}

//Exports the required functions.
module.exports = {
    defaultPrompt,
    viewEmployeesByDepartmentPrompt,
    viewEmployeesByManagerPrompt,
    addEmployeePrompt,
    removeEmployeePrompt,
    updateEmployeeRolePrompt,
    updateEmployeeManagerPrompt,
    addRolePrompt,
    removeRolePrompt,
    addDepartmentPrompt,
    removeDepartmentPrompt,
    getBudgetByDepartmentPrompt
};