const mysql = require("mysql");

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
    //SELECT * FROM employee ORDER BY first_name;
}

function getEmployeesByDepartment(department)
{
    //SELECT * FROM employee WHERE department = <ID> ORDER BY first_name;
}

function getEmployeesByManager(manager)
{
    //SELECT * FROM employee WHERE manager = <ID> ORDER BY first_name;
}

function postEmployee(info)
{
    //INSERT INTO employee (first_name, last_name, role_id) <manager_id>
    //VALUE (info);
}

function deleteEmployee(id)
{
    //DELETE FROM employee WHERE id = <ID>;
}

function patchEmployeeRole(info)
{
    //UPDATE employee SET role WHERE id = <ID>;
}

function patchEmployeeManager(info)
{
    //UPDATE employee SET department WHERE id = <ID>;
}

function postRole(info)
{
    //INSERT INTO role (title, salary, department_id) VALUE <info>;
}

function deleteRole(id)
{
    //DELETE FROM role WHERE id = <ID>;
}

function postDepartment(info)
{
    //INSERT INTO department (name) VALUE <INFO>;
}

function deleteDepartment(id)
{
    //DELETE FROM department WHERE id = <ID>;
}

module.exports = {
    open,
    close,
    getAllEmployees
}