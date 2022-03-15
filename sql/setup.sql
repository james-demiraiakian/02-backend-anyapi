-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT  NULL,
    age INT NOT NULL CHECK (age > -1),
    coat TEXT NOT NULL
);

INSERT INTO
cats (name, age, coat)
VALUES
('Eowyn', 8, 'Calico'),
('Meena', 1, 'Tortoise-shell');
