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

function getAllEmployees()
{
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name" FROM employee ORDER BY first_name`, (err, res) => {
        console.table(res);
    });
}

function getEmployeesByDepartment(departmentId)
{
    console.log(departmentId);
    connection.query(`SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary, name AS Department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE ?`, {"department.id": departmentId}, (err, res) =>
    {
        console.table(res);
    });
}

function getAllDepartments(callback)
{
    connection.query(`SELECT * FROM department`, (err, res) =>
    {
        callback(res);
    });
}

module.exports = {
    open,
    close,
    getAllEmployees,
    getEmployeesByDepartment,
    getAllDepartments
}