/* Imports. */

const mysql = require("mysql");
const cTable = require("console.table");

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
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary, name AS Department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id ORDER BY first_name`, (err, res) => {
        console.table(res);
        callback()
    });
}

//Prints employees with specified department.
function printEmployeesByDepartmentQuery(departmentId, callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE ? ORDER BY first_name`, {"department.id": departmentId}, (err, res) => { console.table(res); callback() });
}

//Prints employees with specified manager.
function printEmployeesByManagerQuery(managerId, callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title FROM employee LEFT JOIN role ON employee.role_id = role.id WHERE ?`, {"employee.manager_id": managerId}, (err, res) => { console.table(res); callback() });
}

//Returns all departments.
function getAllDepartmentsQuery(callback)
{
    connection.query(`SELECT * FROM department`, (err, res) => { callback(res); });
}

//Returns all managers.
function getAllManagersQuery(callback)
{
    connection.query(`SELECT DISTINCT e1.id, e1.first_name, e1.last_name FROM employee e1, employee e2 WHERE e1.id = e2.manager_id`, (err, res) => { callback(res); });
}

//Returns all roles.
function getAllRolesQuery(callback)
{
    connection.query(`SELECT id, title FROM role`, (err, res) => { callback(res); });
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
    connection.query(query, infoArr, (err, res) => {
        console.log(`New employee added!`);
        callback();
    });
}

//Returns all employees.
function getAllEmployeesQuery(callback)
{
    connection.query(`SELECT id, first_name, last_name FROM employee`, (err, res) => { callback(res) });
}

//Deletes a specified employee.
function deleteEmployeeQuery(id, callback)
{
    connection.query(`DELETE FROM employee WHERE ?`,  {id: id}, (err, res) => {
        console.log(`The employee has been removed...`);
        callback();
    });
}

//Changes an employees role.
function updateEmployeeRoleQuery(employeeId, roleId, callback)
{
    connection.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [roleId, employeeId], (err, res) => {
        console.log(`Employees role has been updated.`);
        callback();
    });
}

//Changes an employees manager.
function updateEmployeeManagerQuery(employeeId, managerId, callback)
{
    connection.query(`UPDATE employee SET manager_id = ? WHERE id = ?`, [managerId, employeeId], (err, res) => {
        console.log(`Employees manager has been updated.`);
        callback();
    });
}

//Prints all roles.
function printAllRolesQuery(callback)
{
    connection.query(`SELECT title AS Title, FORMAT(salary, 2) AS Salary FROM role`, (err, res) => {
        console.table(res);
        callback();
    });
}

//Adds a new role.
function addRoleQuery(title, salary, departmentId, callback)
{
    connection.query(`INSERT INTO role (title, salary, department_id) VALUE (?, ?, ?)`, [title, salary, departmentId], (err, res) => {
        console.log(`New role added!`);
        callback();
    });
}

//Deletes a role.
function deleteRoleQuery(roleId, callback)
{
    connection.query(`DELETE FROM role WHERE ?`, {id: roleId}, (err, res) => {
        console.log(`The chosen role has been assassinated.`);
        callback();
    });
}

//Prints all the departments.
function printAllDepartmentsQuery(callback)
{
    connection.query(`SELECT name AS Name FROM department`, (err, res) =>
    {
        console.table(res);
        callback();
    })
}

//Adds a new department.
function addDepartmentQuery(name, callback)
{
    connection.query(`INSERT INTO department (name) VALUE (?)`, name, (err, res) => {
        console.log(`Department added.`);
        callback();
    });
}

//Removes a department.
function removeDepartmentQuery(id, callback)
{
    connection.query(`DELETE FROM department WHERE ?`, {id: id}, (err, res) =>
    {
        console.log(`The chosen department has been removed.`);
        callback();
    })
}

//Prints a total budget for a chosen department.
function printBudgetForDepartmentQuery(id, callback)
{
    connection.query(`SELECT FORMAT(SUM(salary), 2) AS Budget FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ?`, id, (err, res) => {
        console.table(res);
        callback();
    })
}

//Exports the required functions.
module.exports = {
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
    updateEmployeeManagerQuery,
    printAllRolesQuery,
    addRoleQuery,
    deleteRoleQuery,
    printAllDepartmentsQuery,
    addDepartmentQuery,
    removeDepartmentQuery,
    printBudgetForDepartmentQuery
}