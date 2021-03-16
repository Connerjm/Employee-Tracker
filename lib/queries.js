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

function getAllEmployees(callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary, name AS Department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id ORDER BY first_name`, (err, res) => { console.table(res); callback() });
}

function getEmployeesByDepartment(departmentId, callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE ? ORDER BY first_name`, {"department.id": departmentId}, (err, res) => { console.table(res); callback() });
}

function getEmployeesByManager(managerId, callback)
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title FROM employee LEFT JOIN role ON employee.role_id = role.id WHERE ?`, {"employee.manager_id": managerId}, (err, res) => { console.table(res); callback() });
}

function getAllDepartments(callback)
{
    connection.query(`SELECT * FROM department`, (err, res) => { callback(res); });
}

function getAllManagers(callback)
{
    connection.query(`SELECT DISTINCT e1.id, e1.first_name, e1.last_name FROM employee e1, employee e2 WHERE e1.id = e2.manager_id`, (err, res) => { callback(res); });
}

module.exports = {
    open,
    close,
    getAllEmployees,
    getEmployeesByDepartment,
    getEmployeesByManager,
    getAllDepartments,
    getAllManagers
}