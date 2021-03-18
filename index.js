/* Imports. */

const {
    defaultPrompt,
    viewEmployeesByDepartmentPrompt,
    viewEmployeesByManagerPrompt,
    addEmployeePrompt,
    removeEmployeePrompt,
    updateEmployeeRolePrompt,
    updateEmployeeManagerPrompt,
    addRolePrompt,
    removeRolePrompt } = require("./lib/questions");
const {
    open,
    close,
    printAllEmployeesQuery,
    printEmployeesByDepartmentQuery,
    printEmployeesByManagerQuery,
    getAllDepartmentsQuery,
    getAllManagersQuery,
    getAllRolesQuery,
    addEmployeeQuery,
    getAllEmployeesQuery,
    deleteEmployeeQuery,
    updateEmployeeRoleQuery,
    updateEmployeeManagerRoleQuery,
    printAllRolesQuery,
    addRoleQuery,
    deleteRoleQuery,
    printAllDepartmentsQuery } = require("./lib/queries");

/* Main functions. */

//Initializing function.
function init()
{
    //Look... Just know that this is ascii art. I know it looks like I had a stroke, don't worry about it.
    console.log(`
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
--------------------------------------------------------------------------------------------------------------`);
    open();//Opens the database connection.
    basicPrompt();
}

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
        case "View all employees":
            viewAllEmployees()
            break;
        case "View all employees by department":
            viewAllEmployeesByDepartment();
            break;
        case "View all employees by manager":
            viewAllEmployeesByManager();
            break;
        case "Add employee":
            addEmployee();
            break;
        case "Remove employee":
            removeEmployee();
            break;
        case "Update employee role":
            updateEmployeeRole();
            break;
        case "Update employee manager":
            updateEmployeeManager();
            break;
        case "View all roles":
            viewAllRoles();
            break;
        case "Add role":
            addRole();
            break;
        case "Remove role":
            removeRole();
            break;
        case "View all departments":
            viewAllDepartments();
            break;
        case "All done!":
            console.log("Thank you for using Employee Tracker.");
            close();//Closes the database connection.
            process.exit();//Ends the program process.
    }
}

/* Helper functions. */

function viewAllEmployees()
{
    printAllEmployeesQuery(basicPrompt);
}

function viewAllEmployeesByDepartment()
{
    //Get all the departments.
    getAllDepartmentsQuery(async result =>
    {
        //Prompt the user to get the chosen department.
        let chosenDepartment = await viewEmployeesByDepartmentPrompt(result.map(element => element.name));
        //Get and print the employees by chosen department.
        printEmployeesByDepartmentQuery(result.find(element => element.name === chosenDepartment.department).id, basicPrompt);
    });
}

function viewAllEmployeesByManager()
{
    getAllManagersQuery(async result =>
    {
        let chosenManager = await viewEmployeesByManagerPrompt(result.map(element => element.first_name + " " + element.last_name));
        let id;
        result.forEach(element =>
        {
            let names = chosenManager.manager.split(" ");
            if (element.first_name == names[0] && element.last_name == names[1])
                id = element.id;
        });
        printEmployeesByManagerQuery(id, basicPrompt);
    });
}

function addEmployee()
{
    getAllRolesQuery(async roles =>
    {
        getAllManagersQuery(async managers =>
        {
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
            updateEmployeeManagerRoleQuery(employeeId, managerId, basicPrompt);
        });
    });
}

function viewAllRoles()
{
    printAllRolesQuery(basicPrompt);
}

function addRole()
{
    getAllDepartmentsQuery(async departments =>
    {
        let answers = await addRolePrompt(departments.map(element => element.name));
        addRoleQuery(answers.title, answers.salary, departments.find(element => element.name === answers.department).id, basicPrompt);
    });
}

function removeRole()
{
    getAllRolesQuery(async roles =>
    {
        let chosenRole = await removeRolePrompt(roles.map(element => element.title));
        deleteRoleQuery(roles.find(element => element.title === chosenRole.role).id, basicPrompt);
    });
}

function viewAllDepartments()
{
    printAllDepartmentsQuery(basicPrompt);
}

/* Function calls. */

//Calls initializing function.
init();