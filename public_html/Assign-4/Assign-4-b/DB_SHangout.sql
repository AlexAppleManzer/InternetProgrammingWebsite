create table students (
   id int not null primary key,
   name varchar(50) not null,
   email varchar(50) not null,
   AGE int not null,
   gender varchar(1) not null,
   password varchar(50) not null
   );

create table messages (
   id int not null primary key,
   sender_id int,
   receiver_id int,
   message varchar(500)
   );

create table friends (
   id int not null primary key,
   receiver_id int not null,
   receiver_name varchar(50),
   friend_id int not null,
   friend_name varchar(50),
   status int default 0,
   comp int default 0
   );

create table are_friends (
   id int not null primary key,
   frnd_one_id int,
   frnd_two_id int,
   status int default 0,
   extra int default 0
   );

CREATE TABLE IF NOT EXISTS `status_here` (
     `id` int(11) NOT NULL AUTO_INCREMENT, 
     `status` varchar(300) DEFAULT NULL,
     `user_id` int(11) NOT NULL,
     `timestamp` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
     `future_use` int(11) DEFAULT NULL,
      primary key(id)
      );
