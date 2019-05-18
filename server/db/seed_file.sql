CREATE TABLE users
(id SERIAL PRIMARY KEY,
username TEXT,
password TEXT,
profile_pic TEXT)

CREATE TABLE posts
(id SERIAL PRIMARY KEY,
title TEXT,
img TEXT,
content TEXT,
author_id INT)

-- setup author_id references users(id)