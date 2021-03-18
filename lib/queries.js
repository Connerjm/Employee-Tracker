const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_tracker_db"
});

function open()
{
    connection.connect(err => { if (err) throw err; });
}

function close()
{
    connection.end();
}

function printAllEmployeesQuery(callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary, name AS Department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id ORDER BY first_name`, (err, res) => { console.table(res); callback() });
}

function printEmployeesByDepartmentQuery(departmentId, callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE ? ORDER BY first_name`, {"department.id": departmentId}, (err, res) => { console.table(res); callback() });
}

function printEmployeesByManagerQuery(managerId, callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title FROM employee LEFT JOIN role ON employee.role_id = role.id WHERE ?`, {"employee.manager_id": managerId}, (err, res) => { console.table(res); callback() });
}

function getAllDepartmentsQuery(callback)
{
    connection.query(`SELECT * FROM department`, (err, res) => { callback(res); });
}

function getAllManagersQuery(callback)
{
    connection.query(`SELECT DISTINCT e1.id, e1.first_name, e1.last_name FROM employee e1, employee e2 WHERE e1.id = e2.manager_id`, (err, res) => { callback(res); });
}

function getAllRolesQuery(callback)
{
    connection.query(`SELECT id, title FROM role`, (err, res) => { callback(res); });
}

function addEmployeeQuery(firstName, lastName, roleId, managerId, callback)
{
    let query, infoArr;
    if (managerId)
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

function getAllEmployeesQuery(callback)
{
    connection.query(`SELECT id, first_name, last_name FROM employee`, (err, res) => { callback(res) });
}

function deleteEmployeeQuery(id, callback)
{
    connection.query(`DELETE FROM employee WHERE ?`,  {id: id}, (err, res) => {
        console.log(`The employee has been removed...`);
        callback();
    });
}

function updateEmployeeRoleQuery(employeeId, roleId, callback)
{
    connection.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [roleId, employeeId], (err, res) => {
        console.log(`Employees role has been updated.`);
        callback();
    });
}

function updateEmployeeManagerRole(employeeId, managerId, callback)
{
    connection.query(`UPDATE employee SET manager_id = ? WHERE id = ?`, [managerId, employeeId], (err, res) => {
        console.log(`Employees manager has been updated.`);
        callback();
    });
}

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
    updateEmployeeManagerRole
}