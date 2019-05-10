drop table if exists users;


create table users(
    user_id serial primary key,
    password text,
    email text,
    user_name text
);

insert into users (password, email, user_name) 
values ('password', 'danimaldanger@gmail.com', 'Daniel);
