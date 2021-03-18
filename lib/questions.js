const inquirer = require("inquirer");

//Initial prompt asking the user what action they'd like to take.
async function defaultPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View all employees", "View all employees by department", "View all employees by manager", "Add employee", "Remove employee", "Update employee role", "Update employee manager", "View all roles", "Add role", "All done!"]
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

module.exports = {
    defaultPrompt,
    viewEmployeesByDepartmentPrompt,
    viewEmployeesByManagerPrompt,
    addEmployeePrompt,
    removeEmployeePrompt,
    updateEmployeeRolePrompt,
    updateEmployeeManagerPrompt,
    addRolePrompt
};