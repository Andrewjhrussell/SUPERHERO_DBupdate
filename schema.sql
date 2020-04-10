DROP DATABASE IF EXISTS SUPERHERO_DBupdate;

CREATE DATABASE SUPERHERO_DBupdate;

USE SUPERHERO_DBupdate;

CREATE TABLE HEROES(
    id INT NOT NULL AUTO_INCREMENT,
    Hero_Name VARCHAR(40) NOT NULL,
    Secret_ID VARCHAR(40) NOT NULL,
    Super_Power VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO HEROES(Hero_Name, Secret_ID, Super_Power) VALUES ("THANOS", "Mark Marvel", "JEM STONE GLOVE");