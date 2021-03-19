/* Imports. */

const mysql = require("mysql");
const cTable = require("console.table");
const chalk = require("chalk");

/* Operational Functions. */

//Sets up the connection to be used.
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_tracker_db"
});

//Opens the connection.
function open()
{
    connection.connect(err => { if (err) throw err; });
}

//Closes the connection.
function close()
{
    connection.end();
}

/* Query Functions. */

//Prints all employees
function printAllEmployeesQuery(callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary, name AS Department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id ORDER BY first_name`, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.table(res);
        }
        callback()
    });
}

//Prints employees with specified department.
function printEmployeesByDepartmentQuery(departmentId, callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE ? ORDER BY first_name`, {"department.id": departmentId}, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.table(res);
        }
        callback()
    });
}

//Prints employees with specified manager.
function printEmployeesByManagerQuery(managerId, callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title FROM employee LEFT JOIN role ON employee.role_id = role.id WHERE ? ORDER BY first_name`, {"employee.manager_id": managerId}, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.table(res);
        }
        callback()
    });
}

//Prints all roles.
function printAllRolesQuery(callback)
{
    connection.query(`SELECT title AS Title, FORMAT(salary, 2) AS Salary FROM role ORDER BY title`, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.table(res);
        }
        callback();
    });
}

//Prints all the departments.
function printAllDepartmentsQuery(callback)
{
    connection.query(`SELECT name AS Name FROM department ORDER BY name`, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.table(res);
        }
        callback();
    })
}

//Changes an employees role.
function updateEmployeeRoleQuery(employeeId, roleId, callback)
{
    connection.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [roleId, employeeId], (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.log(chalk.green(`Employees role has been updated.`));
        }
        console.log("\n");
        callback();
    });
}

//Changes an employees manager.
function updateEmployeeManagerQuery(employeeId, managerId, callback)
{
    connection.query(`UPDATE employee SET manager_id = ? WHERE id = ?`, [managerId, employeeId], (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.log(chalk.green(`Employees manager has been updated.`));
        }
        console.log("\n");
        callback();
    });
}

//Creates an employee.
function addEmployeeQuery(firstName, lastName, roleId, managerId, callback)
{
    let query, infoArr;
    if (managerId)//If the memployee has a manager or not.
    {
        query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)`;
        infoArr = [firstName, lastName, roleId, managerId];
    }
    else
    {
        query = `INSERT INTO employee (first_name, last_name, role_id) VALUE (?, ?, ?)`;
        infoArr = [firstName, lastName, roleId];
    }
    connection.query(query, infoArr, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.log(chalk.green(`Employee added.`));
        }
        console.log("\n");
        callback();
    });
}

//Adds a new role.
function addRoleQuery(title, salary, departmentId, callback)
{
    connection.query(`INSERT INTO role (title, salary, department_id) VALUE (?, ?, ?)`, [title, salary, departmentId], (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.log(chalk.green(`Role added.`));
        }
        console.log("\n");
        callback();
    });
}

//Adds a new department.
function addDepartmentQuery(name, callback)
{
    connection.query(`INSERT INTO department (name) VALUE (?)`, name, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.log(chalk.green(`Department added.`));
        }
        console.log("\n");
        callback();
    });
}

//Deletes a specified employee.
function deleteEmployeeQuery(id, callback)
{
    connection.query(`DELETE FROM employee WHERE ?`,  {id: id}, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.log(chalk.green(`The chosen employee has been removed.`));
        }
        console.log("\n");
        callback();
    });
}

//Deletes a role.
function deleteRoleQuery(roleId, callback)
{
    connection.query(`DELETE FROM role WHERE ?`, {id: roleId}, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.log(chalk.green(`The chosen role has been removed.`));
        }
        console.log("\n");
        callback();
    });
}

//Deletes a department.
function deleteDepartmentQuery(id, callback)
{
    connection.query(`DELETE FROM department WHERE ?`, {id: id}, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.log(chalk.green(`The chosen department has been removed.`));
        }
        console.log("\n");
        callback();
    })
}

//Prints a total budget for a chosen department.
function printBudgetForDepartmentQuery(id, callback)
{
    connection.query(`SELECT FORMAT(SUM(salary), 2) AS Budget FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ?`, id, (err, res) =>
    {
        console.log("\n");
        if (err)
        {
            console.error(chalk.bold.red(err.sqlMessage));
        }
        else
        {
            console.table(res);
        }
        callback();
    })
}

/* Helper queries */

//Returns all employees.
function getAllEmployeesQuery(callback)
{
    connection.query(`SELECT id, first_name, last_name FROM employee ORDER BY first_name`, (err, res) =>
    {
        if (err) console.error(chalk.bold.red(err.sqlMessage));
        callback(res)
    });
}

//Returns all managers.
function getAllManagersQuery(callback)
{
    connection.query(`SELECT DISTINCT e1.id, e1.first_name, e1.last_name FROM employee e1, employee e2 WHERE e1.id = e2.manager_id ORDER BY e1.first_name`, (err, res) =>
    {
        if (err) console.error(chalk.bold.red(err.sqlMessage));
        callback(res);
    });
}

//Returns all roles.
function getAllRolesQuery(callback)
{
    connection.query(`SELECT id, title FROM role ORDER BY title`, (err, res) =>
    {
        if (err) console.error(chalk.bold.red(err.sqlMessage));
        callback(res);
    });
}

//Returns all departments.
function getAllDepartmentsQuery(callback)
{
    connection.query(`SELECT * FROM department ORDER BY name`, (err, res) =>
    {
        if (err) console.error(chalk.bold.red(err.sqlMessage));
        callback(res);
    });
}

//Exports the required functions.
module.exports = {
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
    getAllDepartmentsQuery
}