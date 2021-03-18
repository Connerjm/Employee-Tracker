/* Imports. */

const {
    defaultPrompt,
    viewEmployeesByDepartmentPrompt,
    viewEmployeesByManagerPrompt,
    addEmployeePrompt } = require("./lib/questions");
const {
    open,
    close,
    printAllEmployeesQuery,
    printEmployeesByDepartmentQuery,
    printEmployeesByManagerQuery,
    getAllDepartmentsQuery,
    getAllManagersQuery,
    getAllRolesQuery,
    addEmployeeQuery } = require("./lib/queries");

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
            addEmployee()
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

/* Function calls. */

//Calls initializing function.
init();