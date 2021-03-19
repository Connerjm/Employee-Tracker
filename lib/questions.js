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
            choices: [new inquirer.Separator(`----View----`), "View all employees", "View employees by department", "View employees by manager", "View all roles", "View all departments", new inquirer.Separator(`----Edit----`), "Update employee role", "Update employee manager", new inquirer.Separator(`----Add----`), "Add employee", "Add role", "Add department", new inquirer.Separator(`----Remove----`), "Remove employee", "Remove role", "Remove department", new inquirer.Separator(`----Other----`), "Get budget for a department", "All done!"]
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

//Asks for info for the new user.
async function addEmployeePrompt(roles, managers)
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter the new employees first name.",
            validate: (input) =>
            {
                if (input.match(/^[a-zA-Z]*$/))
                    return true;
                else
                    return `Please enter a valid first name.`;
            }
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter the new employees last name.",
            validate: (input) =>
            {
                if (input.match(/^[a-zA-Z]*$/))
                    return true;
                else
                    return `Please enter a valid last name.`;
            }
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

//Asks for info for a new role.
async function addRolePrompt(departments)
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of this role?",
            validate: (input) =>
            {
                if (input.match(/^[a-zA-Z0-9]*$/))
                    return true;
                else
                    return `Please enter a valid title.`;
            }
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary for this role?",
            validate: (input) =>
            {
                if (input.match(/^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/))
                    return true;
                else
                    return `Please enter a valid salary.`;
            }
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

//Asks for info for a new department.
async function addDepartmentPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "Enter the name of the new department.",
            validate: (input) =>
            {
                if (input.match(/^[a-zA-Z0-9]*$/))
                    return true;
                else
                    return `Please enter a valid department.`;
            }
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
    updateEmployeeRolePrompt,
    updateEmployeeManagerPrompt,
    addEmployeePrompt,
    addRolePrompt,
    addDepartmentPrompt,
    removeEmployeePrompt,
    removeRolePrompt,
    removeDepartmentPrompt,
    getBudgetByDepartmentPrompt
};