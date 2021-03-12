const inquirer = require("inquirer");

function defaultPrompt()
{
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View all employees", "View all employees by department", "View all employees by manager", "Add employee", "Remove employee", "Update employee role", "Update employee manager", "View all roles", "Add role", "Remove role"]
        }
    ])
        .then()
        .catch(err =>
            {
                if (err) console.error(error);
            });
}

function viewAllEmployeesPrompt()
{
    //TODO
}

function viewEmployeesByDepartmentPrompt()
{
    //TODO
}

function viewEmployeesByManagerPrompt()
{
    //TODO
}

function addEmployeePrompt()
{
    //TODO
}

function removeEmployeePrompt()
{
    //TODO
}

function updateEmployeeRolePrompt()
{
    //TODO
}

function updateEmployeeManagerPrompt()
{
    //TODO
}

function viewAllRollsPrompt()
{
    //TODO
}

function addRolePrompt()
{
    //TODO
}

function removeRolePrompt()
{
    //TODO
}

module.exports = {
    defaultPrompt,
    viewAllEmployeesPrompt,
    viewEmployeesByDepartmentPrompt,
    viewEmployeesByManagerPrompt,
    addEmployeePrompt,
    removeEmployeePrompt,
    updateEmployeeRolePrompt,
    updateEmployeeManagerPrompt,
    viewAllRollsPrompt,
    addRolePrompt,
    removeRolePrompt
};