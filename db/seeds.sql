USE employees_db;

INSERT INTO department (name)
VALUES
('Human Resources').
('Finance'),
('Security'),
('Sales'),
('IT');

INSERT INTO roles (title, salary, department_id)
VALUES
('Web Developer', 100000, 1),
('HR Manager', 75000, 2),
('Accountant', 90000, 3),
('Sales Rep', 45000, 4),
('Software Engineer', 150000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jim', 'Bo', 1, 111),
('Rich', 'Man', 2, 222),
('Jane', 'Doe', 3, 333),
('Saint', 'Nick', 4, 444),
('Billy', 'Bob', 5, 555);