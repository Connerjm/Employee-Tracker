const { defaultPrompt,
    viewAllEmployeesPrompt,
    viewEmployeesByDepartmentPrompt,
    viewEmployeesByManagerPrompt,
    addEmployeePrompt,
    removeEmployeePrompt,
    updateEmployeeRolePrompt,
    updateEmployeeManagerPrompt,
    viewAllRollsPrompt,
    addRolePrompt,
    removeRolePrompt } = require("./lib/inquirerjs");

function init()
{
    defaultPrompt();
}

init();