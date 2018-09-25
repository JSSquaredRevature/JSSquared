create table social_worker (
  id number(20) primary key,
  isadmin number not null,
  username varchar2(30) unique not null,
  pass varchar2(30) not null,
  firstname varchar2(40) not null,
  lastname varchar2(40) not null
);

create table cases (
  caseid number(20) primary key,
  firstname varchar2(40) not null,
  lastname varchar2(40) not null,
  birthdate date not null,
  rating number(3) not null,
  socialworkerid number(20) not null,
  placementid number(10) not null
);

create table sibling (
  id number(20) primary key,
  eldercaseid number(20) not null,
  youngercaseid number(20) not null
);

create table transportation (
  id number(20) primary key,
  socialworkerid number(20) not null,
  caseid number(20) not null,
  time TIMESTAMP not null,
  location VARCHAR2(200)
);

create table placement (
  id number(20) primary key,
  type varchar2(40) not null,
  maxcapacity number(5) not null,
  agemin number(2) not null,
  agemax number(2) not null
);  

create table phonelog (
  id number(20) primary key,
  caseid number(20) not null,
  caller varchar2(40) not null,
  time timestamp not null,
  duration varchar2(3) not null
);

create table court_date (
  id number(20) primary key,
  caseid number(20) not null,
  time timestamp not null,
  location varchar2(200) not null,
  transportationid number(20)
);

