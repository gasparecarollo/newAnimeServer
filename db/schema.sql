DROP DATABASE IF EXISTS animania_dev;
--Start fresh data by dropping the old and creating a new one
--Create a new database
CREATE DATABASE animania_dev;
--Connect to said database
\c animania_dev;

CREATE TABLE animes (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
description TEXT NOT NULL
);

