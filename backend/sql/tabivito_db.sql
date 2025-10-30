create database travelmanager;

use travelmanager;

create table users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  name VARCHAR(100),
  password VARCHAR(100),
  email VARCHAR(100)
);


select * from users;

truncate table users;