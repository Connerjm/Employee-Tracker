const inquirer = require("inquirer");

//Initial prompt asking the user what action they'd like to take.
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
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Asks the user which departments employees they'd like to view.
function viewEmployeesByDepartmentPrompt()
{
    inquirer.prompt([
        {
            type: "list",
            name: "department",
            message: "Which departments employees would you like to view?",
            choices: []//TODO
        }
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Asks the user which managers employees they'd like to view.
function viewEmployeesByManagerPrompt()
{
    inquirer.prompt([
        {
            type: "list",
            name: "manager",
            message: "Which managers employees would you like to view?",
            choices: []//TODO
        }
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Allows the user to add employees to the database.
function addEmployeePrompt()
{
    inquirer.prompt([
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
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Askes the user which employee they wish to remove.
function removeEmployeePrompt()
{
    inquirer.prompt([
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
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Updates an employees role.
function updateEmployeeRolePrompt()
{
    inquirer.prompt([
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
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Updates an employees manager.
function updateEmployeeManagerPrompt()
{
    inquirer.prompt([
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
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Adds a new role.
function addRolePrompt()
{
    inquirer.prompt([
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
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Removes a role.
function removeRolePrompt()
{
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Which role would you like to remove?",
            choices: []//TODO
        }
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Adds a new department.
function addDepartmentPrompt()
{
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department to add?"
        }
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

//Removes a department.
function removeDepartmentPrompt()
{
    inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "Which department would you like to remove?",
            choices: []//TODO
        }
    ])
        .then()//TODO
        .catch(err =>
            {
                if (err) console.error(err);
            });
}

module.exports = {
    defaultPrompt
};