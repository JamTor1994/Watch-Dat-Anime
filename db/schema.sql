drop database animes_db
create database animes_db;
use animes_db;

CREATE table anime
(
id int not null Auto_Increment,
name varchar (60),
watched boolean default false,
primary key (id)
);
