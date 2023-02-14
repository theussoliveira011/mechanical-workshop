CREATE DATABASE mechanical_workshop;

USE mechanical_workshop;

CREATE TABLE users
(
	id INT AUTO_INCREMENT PRIMARY KEY, 
	nome VARCHAR(150) NOT NULL, 
	email VARCHAR(150) NOT NULL, 
	senha VARCHAR(150) NOT NULL
);

INSERT INTO users VALUES 
	("Jefferson", "jefferson@gmail.com", "123456789"),
    ("Matheus", "matheus@gmail.com", "123456789"),
    ("Richarde", "richarde@gmail.com", "123456789"),
    ("Keyla", "Keyla@gmail.com", "123456789");

CREATE TABLE services 
(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    price DOUBLE NOT NULL
);

