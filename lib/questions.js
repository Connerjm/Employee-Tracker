const inquirer = require("inquirer");

//Initial prompt asking the user what action they'd like to take.
async function defaultPrompt()
{
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View all employees", "View all employees by department", "View all employees by manager", "All done!"]
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

module.exports = {
    defaultPrompt,
    viewEmployeesByDepartmentPrompt,
    viewEmployeesByManagerPrompt
};