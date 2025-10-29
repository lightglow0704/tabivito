create database travelmanager;

use travelmanager;

create table users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  name VARCHAR(100),
  password VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE favorites (
   favorite_id BIGINT PRIMARY KEY AUTO_INCREMENT,
   user_id BIGINT NOT NULL,
   travel_name VARCHAR(255) NOT NULL,
   travel_subtitle VARCHAR(255),
   travel_image VARCHAR(255),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   UNIQUE(user_id, travel_name)
);

select * from users;

truncate table users;