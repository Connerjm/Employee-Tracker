/* Imports. */

const { defaultPrompt } = require("./lib/questions");
const { open, close, getAllEmployees } = require("./lib/queries");

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
            getAllEmployees();
            break;
        case "View all employees by department":
            //TODO
            break;
        case "View all employees by manager":
            //TODO
            break;
        case "Add employee":
            //TODO
            break;
        case "Remove employee":
            //TODO
            break;
        case "Update employee role":
            //TODO
            break;
        case "Update employee manager":
            //TODO
            break;
        case "View all roles":
            //TODO
            break;
        case "Add role":
            //TODO
            break;
        case "Remove role":
            //TODO
            break;
        case "View all departments":
            //TODO
            break;
        case "Add department":
            //TODO
            break;
        case "Remove department":
            //TODO
            break;
        case "All done!":
            console.log("Thank you for using Employee Tracker.");
            close();//Closes the database connection.
            process.exit();//Ends the program process.
    }
}

/* Helper functions. */



/* Function calls. */

//Calls initializing function.
init();