/* Imports. */

const {
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
    getBudgetByDepartmentPrompt } = require("./lib/questions");
const {
    open,
    close,
    printAllEmployeesQuery,
    printEmployeesByDepartmentQuery,
    printEmployeesByManagerQuery,
    printAllRolesQuery,
    printAllDepartmentsQuery,
    updateEmployeeRoleQuery,
    updateEmployeeManagerQuery,
    addEmployeeQuery,
    addRoleQuery,
    addDepartmentQuery,
    deleteEmployeeQuery,
    deleteRoleQuery,
    deleteDepartmentQuery,
    printBudgetForDepartmentQuery,
    getAllEmployeesQuery,
    getAllManagersQuery,
    getAllRolesQuery,
    getAllDepartmentsQuery } = require("./lib/queries");
const chalk = require("chalk");

/* Main functions. */

//Initializing function.
function init()
{
    //Look... Just know that this is ascii art. I know it looks like I had a stroke, don't worry about it.
    console.log(chalk.magenta(`
--------------------------------------------------------------------------------------------------------------
|      ___           ___           ___           ___       ___           ___           ___           ___     |
|     /\\  \\         /\\__\\         /\\  \\         /\\__\\     /\\  \\         |\\__\\         /\\  \\         /\\  \\    |
|    /\:\:\\  \\       /\:\:|  |       /\:\:\\  \\       /\:/  /    /\:\:\\  \\        |\:|  |       /\:\:\\  \\       /\:\:\\  \\   |
|   /\:/\\\:\\  \\     /\:|\:|  |      /\:/\\\:\\  \\     /\:/  /    /\:/\\\:\\  \\       |\:|  |      /\:/\\\:\\  \\     /\:/\\\:\\  \\  |
|  /\:\:\\\~\\\:\\  \\   /\:/|\:|__|__   /\:\:\\\~\\\:\\  \\   /\:/  /    /\:/  \\\:\\  \\      |\:|__|__   /\:\:\\\~\\\:\\  \\   /\:\:\\\~\\\:\\  \\ |
| /\:/\\\:\\ \\\:\\__\\ /\:/ |\:\:\:\:\\__\\ /\:/\\\:\\ \\\:\\__\\ /\:/__/    /\:/__/ \\\:\\__\\     /\:\:\:\:\\__\\ /\:/\\\:\\ \\\:\\__\\ /\:/\\\:\\ \\\:\\__\\|
| \\\:\\\~\\\:\\ \\/__/ \\/__/\~\~/\:/  / \\/__\\\:\\/\:/  / \\\:\\  \\    \\\:\\  \\ /\:/  /    /\:/\~\~/\~    \\\:\\\~\\\:\\ \\/__/ \\\:\\\~\\\:\\ \\/__/|
|  \\\:\\ \\\:\\__\\         /\:/  /       \\\:\:/  /   \\\:\\  \\    \\\:\\  /\:/  /    /\:/  /       \\\:\\ \\\:\\__\\    \\\:\\ \\\:\\__\\  |
|   \\\:\\ \\/__/        /\:/  /         \\/__/     \\\:\\  \\    \\\:\\/\:/  /     \\/__/         \\\:\\ \\/__/     \\\:\\ \\/__/  |
|    \\\:\\__\\         /\:/  /                     \\\:\\__\\    \\\:\:/  /                     \\\:\\__\\        \\\:\\__\\    |
|     \\/__/         \\/__/                       \\/__/     \\/__/                       \\/__/         \\/__/    |
|          ___           ___           ___           ___           ___           ___           ___           |
|         /\\__\\         /\\  \\         /\\__\\         /\\  \\         /\\  \\         /\\  \\         /\\  \\          |
|        /\:\:|  |       /\:\:\\  \\       /\:\:|  |       /\:\:\\  \\       /\:\:\\  \\       /\:\:\\  \\       /\:\:\\  \\         |
|       /\:|\:|  |      /\:/\\\:\\  \\     /\:|\:|  |      /\:/\\\:\\  \\     /\:/\\\:\\  \\     /\:/\\\:\\  \\     /\:/\\\:\\  \\        |
|      /\:/|\:|__|__   /\:\:\\\~\\\:\\  \\   /\:/|\:|  |__   /\:\:\\\~\\\:\\  \\   /\:/  \\\:\\  \\   /\:\:\\\~\\\:\\  \\   /\:\:\\\~\\\:\\  \\       |
|     /\:/ |\:\:\:\:\\__\\ /\:/\\\:\\ \\\:\\__\\ /\:/ |\:| /\\__\\ /\:/\\\:\\ \\\:\\__\\ /\:/__/_\\\:\\__\\ /\:/\\\:\\ \\\:\\__\\ /\:/\\\:\\ \\\:\\__\\      |
|     \\/__/\~\~/\:/  / \\/__\\\:\\/\:/  / \\/__|\:|/\:/  / \\/__\\\:\\/\:/  / \\\:\\  /\\ \\/__/ \\\:\\\~\\\:\\ \\/__/ \\/_|\:\:\\/\:/  /      |
|           /\:/  /       \\\:\:/  /      |\:/\:/  /       \\\:\:/  /   \\\:\\ \\\:\\__\\    \\\:\\ \\\:\\__\\      |\:|\:\:/  /       |
|          /\:/  /        /\:/  /       |\:\:/  /        /\:/  /     \\\:\\/\:/  /     \\\:\\ \\/__/      |\:|\\/__/        |
|         /\:/  /        /\:/  /        /\:/  /        /\:/  /       \\\:\:/  /       \\\:\\__\\        |\:|  |          |
|         \\/__/         \\/__/         \\/__/         \\/__/         \\/__/         \\/__/         \\|__|          |
--------------------------------------------------------------------------------------------------------------`));
    open();//Opens the database connection.
    basicPrompt();//Default prompt before any specific action begins.
}

//Basic function that is called after each branch to determine next action.
async function basicPrompt()
{
    let answers = await defaultPrompt();//Runs initial prompt.
    whatNext(answers.action);//Decides what action to do next.
}

//Takes the selection from the entry prompt and decides which queries to run.
function whatNext(option)
{
    switch (option)
    {
        case "View all employees"://Check option.
            viewAllEmployees()//Run assossiated function.
            break;
        case "View employees by department":
            viewEmployeesByDepartment();
            break;
        case "View employees by manager":
            viewEmployeesByManager();
            break;
        case "View all roles":
            viewAllRoles();
            break;
        case "View all departments":
            viewAllDepartments();
            break;
        case "Update employee role":
            updateEmployeeRole();
            break;
        case "Update employee manager":
            updateEmployeeManager();
            break;
        case "Add employee":
            addEmployee();
            break;
        case "Add role":
            addRole();
            break;
        case "Add department":
            addDepartment();
            break;
        case "Remove employee":
            removeEmployee();
            break;
        case "Remove role":
            removeRole();
            break;
        case "Remove department":
            removeDepartment();
            break;
        case "Get budget for a department":
            getBudgetByDepartment();
            break;
        case "All done!":
            console.log(chalk.magenta("\nThank you for using Employee Tracker."));
            close();//Closes the database connection.
            process.exit();//Ends the program process.
    }
}

/* Helper functions. */

//Prints all employees.
function viewAllEmployees()
{
    printAllEmployeesQuery(basicPrompt);
}

//Prints all employees by specified department.
function viewEmployeesByDepartment()
{
    //Get all the departments.
    getAllDepartmentsQuery(async departments =>
    {
        //Prompt the user to get the chosen department.
        let chosenDepartment = await viewEmployeesByDepartmentPrompt(departments.map(element => element.name));
        //Get and print the employees by chosen department.
        printEmployeesByDepartmentQuery(departments.find(element => element.name === chosenDepartment.department).id, basicPrompt);
    });
}

//Prints all employees by specified manager.
function viewEmployeesByManager()
{
    //Gets all the managers.
    getAllManagersQuery(async manager =>
    {
        //Let user pick a manager.
        let chosenManager = await viewEmployeesByManagerPrompt(manager.map(element => element.first_name + " " + element.last_name));
        //Grab the managers id.
        let id;
        manager.forEach(element =>
        {
            let names = chosenManager.manager.split(" ");
            if (element.first_name == names[0] && element.last_name == names[1])
                id = element.id;
        });
        //Prints the employees.
        printEmployeesByManagerQuery(id, basicPrompt);
    });
}

//Prints all roles to the screen.
function viewAllRoles()
{
    printAllRolesQuery(basicPrompt);
}

//Prints all departments.
function viewAllDepartments()
{
    printAllDepartmentsQuery(basicPrompt);
}

//Changes an employees role based on user input.
function updateEmployeeRole()
{
    getAllEmployeesQuery(async employees =>
    {
        getAllRolesQuery(async roles =>
        {
            let answers = await updateEmployeeRolePrompt(employees.map(element => element.first_name + " " + element.last_name), roles.map(element => element.title));
            let roleId = roles.find(element => element.title === answers.role).id;
            let id;
            employees.forEach(element =>
            {
                let names = answers.employee.split(" ");
                if (element.first_name == names[0] && element.last_name == names[1])
                    id = element.id;
            });
            updateEmployeeRoleQuery(id, roleId, basicPrompt);
        });
    });
}

//Changes an employees manager based on user input.
function updateEmployeeManager()
{
    getAllEmployeesQuery(async employees =>
    {
        getAllEmployeesQuery(async managers =>
        {
            let answers = await updateEmployeeManagerPrompt(employees.map(element => element.first_name + " " + element.last_name), managers.map(element => element.first_name + " " + element.last_name));
            let employeeId, managerId;
            employees.forEach(element =>
            {
                let names = answers.employee.split(" ");
                if (element.first_name == names[0] && element.last_name == names[1])
                    employeeId = element.id;
            });
            managers.forEach(element =>
            {
                let names = answers.manager.split(" ");
                if (element.first_name == names[0] && element.last_name == names[1])
                    managerId = element.id;
            });
            updateEmployeeManagerQuery(employeeId, managerId, basicPrompt);
        });
    });
}

//Prompts the user for info to add a new employee.
function addEmployee()
{
    //Get all roles.
    getAllRolesQuery(async roles =>
    {
        //Get all employees.
        getAllEmployeesQuery(async managers =>
        {
            //Gets info from the user.
            let answers = await addEmployeePrompt(roles.map(element => element.title), managers.map(element => element.first_name + " " + element.last_name));
            let roleId = roles.find(element => element.title === answers.role).id;
            let managerId;
            managers.forEach(element =>
            {
                let names = answers.manager.split(" ");
                if (element.first_name == names[0] && element.last_name == names[1])
                    managerId = element.id;
            });
            addEmployeeQuery(answers.first_name, answers.last_name, roleId, managerId, basicPrompt);
        });
    });
}

//Takes user input to add a new role.
function addRole()
{
    getAllDepartmentsQuery(async departments =>
    {
        let answers = await addRolePrompt(departments.map(element => element.name));
        addRoleQuery(answers.title, answers.salary, departments.find(element => element.name === answers.department).id, basicPrompt);
    });
}

//Adds a new department based on user input.
async function addDepartment()
{
    let name = await addDepartmentPrompt();
    addDepartmentQuery(name.department, basicPrompt);
}

//Removes a user.
function removeEmployee()
{
    getAllEmployeesQuery(async result =>
    {
        let chosenEmployee = await removeEmployeePrompt(result.map(element => element.first_name + " " + element.last_name));
        let id;
        result.forEach(element =>
        {
            let names = chosenEmployee.employee.split(" ");
            if (element.first_name == names[0] && element.last_name == names[1])
                id = element.id;
        });
        deleteEmployeeQuery(id, basicPrompt);
    });
}

//Removes a chosen role.
function removeRole()
{
    getAllRolesQuery(async roles =>
    {
        let chosenRole = await removeRolePrompt(roles.map(element => element.title));
        deleteRoleQuery(roles.find(element => element.title === chosenRole.role).id, basicPrompt);
    });
}

//Removes a chosen department.
function removeDepartment()
{
    getAllDepartmentsQuery(async departments =>
    {
        let chosenDepartment = await removeDepartmentPrompt(departments.map(element => element.name));
        deleteDepartmentQuery(departments.find(element => element.name === chosenDepartment.department).id, basicPrompt);
    });
}

//Gets the total budget for a specified department.
function getBudgetByDepartment()
{
    getAllDepartmentsQuery(async departments =>
    {
        let chosenDepartment = await getBudgetByDepartmentPrompt(departments.map(element => element.name));
        printBudgetForDepartmentQuery(departments.find(element => element.name === chosenDepartment.department).id, basicPrompt);
    });
}

/* Function calls. */

//Calls initializing function.
init();