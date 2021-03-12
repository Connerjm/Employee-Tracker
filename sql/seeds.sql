USE employee_tracker_db;

INSERT INTO department (name)
VALUE ("Genin"),
("Chunin"),
("Jonin"),
("Kage");

INSERT INTO role (title, salary, department_id)
VALUE ("Anbu Black Ops", 100000.00, 3),
("Chef", "40000.00", 2),
("Courier", "55000.00", 2),
("Tracker", 75000.00, 3),
("Medic", 60000.00, 2),
("Sensei", 45000.00, 3),
("Student", 0, 1),
("Hokage", 1000000.00, 4);

INSERT INTO employee (first_name, role_id)
VALUE ("Kakashi", 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Naruto", "Uzumaki", 7, 1),
("Sakura", "Haruno", 7, 1),
("Sasuke", "Uchiha", 7, 1),
("Konohamaru", "Sarutobi", 7, 2);

SELECT * FROM employee;