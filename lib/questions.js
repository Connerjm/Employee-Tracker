const inquirer = require("inquirer");

//Initial prompt asking the user what action they'd like to take.
async function defaultPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View all employees", "View all employees by department", "View all employees by manager", "Add employee", "Remove employee", "Update employee role", "Update employee manager", "View all roles", "Add role", "Remove role", "View all departments", "Add department", "Remove department"]
        }]);
    return answers;
}

//Asks the user which departments employees they'd like to view.
async function viewEmployeesByDepartmentPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "department",
            message: "Which departments employees would you like to view?",
            choices: []//TODO
        }
    ]);
    return answers;
}

//Asks the user which managers employees they'd like to view.
async function viewEmployeesByManagerPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "manager",
            message: "Which managers employees would you like to view?",
            choices: []//TODO
        }
    ]);
    return answers;
}

//Allows the user to add employees to the database.
async function addEmployeePrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "First name:"
        },
        {
            type: "input",
            name: "last_name",
            message: "Last name:"
        },
        {
            type: "list",
            name: "role",
            message: "Role:",
            choices: []//TODO
        },
        {
            type: "confirm",
            name: "has_manager",
            message: "Would you like to enter a manager?",
            default: true
        },
        {
            type: "list",
            name: "manager",
            message: "Select the name of their manager.",
            choices: []//TODO
        }
    ]);
    return answers;
}

//Askes the user which employee they wish to remove.
async function removeEmployeePrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employee would you like to remove?",
            choices: []//TODO
        },
        {
            type: "confirm",
            name: "confirmDelete",
            message: "This action cannot be reverted. Do you with to proceed?",
            default: false
        }
    ]);
    return answers;
}

//Updates an employees role.
async function updateEmployeeRolePrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employees role would you like to modify?",
            choices: []//TODO
        },
        {
            type: "list",
            name: "role", 
            message: "Which role would you like to change to?",
            choices: []//TODO
        }
    ]);
    return answers;
}

//Updates an employees manager.
async function updateEmployeeManagerPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "Which employee would you like to alter?",
            choices: []//TODO
        },
        {
            type: "list",
            name: "manager",
            message: "Which manager would you like to set for this employee?",
            choices: []//TODO
        }
    ]);
    return answers;
}

//Adds a new role.
async function addRolePrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the new role?",
        },
        {
            type: "number",
            name: "salary",
            message: "Enter this roles salary."
        },
        {
            type: "list",
            name: "department",
            message: "Which department is this role assosiated with?",
            choices: []//TODO
        }
    ]);
    return answers;
}

//Removes a role.
async function removeRolePrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Which role would you like to remove?",
            choices: []//TODO
        }
    ]);
    return answers;
}

//Adds a new department.
async function addDepartmentPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department to add?"
        }
    ]);
    return answers;
}

//Removes a department.
async function removeDepartmentPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "Which department would you like to remove?",
            choices: []//TODO
        }
    ]);
    return answers;
}

module.exports = {
    defaultPrompt
};