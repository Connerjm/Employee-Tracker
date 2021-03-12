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
                if (error) console.error(error);
            });
}

module.exports = {
    defaultPrompt
};