INSERT INTO department (id, name)
VALUES ('101', 'Human resources'),
        ('102', 'Engineering'),
        ('103', 'Research and Development');

        INSERT INTO role (id, title, salary, department_id)
        VALUES ('201', 'Head of HR', '75000', '101'),
        ('202', 'Senior Engineer', '90000', '102'),
        ('203', 'Lead Reseacher', '100000', '103');

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ('301', 'Ted', 'Nedd', '201', '301'),
        ('302', 'Old', 'Tom', '202', '302'),
         ('303', 'RealOld', 'Tom', '203', '303');