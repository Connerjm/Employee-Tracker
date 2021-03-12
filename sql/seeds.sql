USE employee_tracker_db;

INSERT INTO department (name)
VALUE ("Genin"),
("Chunin"),
("Jonin"),
("Kage");

INSERT INTO role (title, salary, department_id)
VALUE ("Anbu Black Ops", 85865.00, 3),
("Chef", 32538.00, 2),
("Courier", 45210.00, 2),
("Tracker", 50510.00, 3),
("Medic", 43775.00, 2),
("Sensei", 44264.00, 3),
("Student", 3900, 1),
("Hokage", 187353.00, 4);

INSERT INTO employee (first_name, role_id)
VALUE ("Kakashi", 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Naruto", "Uzumaki", 7, 1),
("Sakura", "Haruno", 7, 1),
("Sasuke", "Uchiha", 7, 1),
("Konohamaru", "Sarutobi", 7, 2);

SELECT * FROM employee;