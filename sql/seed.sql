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

INSERT INTO employee (first_name, last_name, role_id)
VALUE ("Kakashi", "Hatake", 6),
("Might", "Guy", 6),
("Zabuza", "Momochi", 6),
("Teuchi", "N/A", 2),
("Hakkaku", "N/A", 2),
("Hiruzen", "Sarutobi", 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Naruto", "Uzumaki", 7, 1),
("Sakura", "Haruno", 7, 1),
("Sasuke", "Uchiha", 7, 1),
("Rock", "Lee", 7, 2),
("Neji", "Hyuga", 7, 2),
("Tenten", "N/A", 7, 2),
("Konohamaru", "Sarutobi", 7, 7),
("Haku", "N/A", 4, 3);