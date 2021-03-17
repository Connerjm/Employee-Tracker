USE employee_tracker_db;

SELECT * FROM employee;

SELECT * FROM role;

SELECT * FROM department;

-- Gets all entries will all columns. --
SELECT * FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id ORDER BY first_name;

-- Gets all employees with specific columns. --
SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary, name AS Department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id ORDER BY department.id DESC;

-- Gets all employees in a chosen department. --
SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title, FORMAT(salary, 2) AS Salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = 1 ORDER BY first_name;

-- Gets all employees with a chosen manager. --
SELECT first_name AS "First Name", last_name AS "Last Name", title AS Title FROM employee LEFT JOIN role ON employee.role_id = role.id WHERE employee.manager_id = 1;

-- Gets all managers. --
SELECT DISTINCT e1.id, e1.first_name, e1.last_name FROM employee e1, employee e2 WHERE e1.id = e2.manager_id;