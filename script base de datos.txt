 create database hotel_miramar
 use hotel_miramar

 create table suscripcion (
 idSuscripcion int not null auto_increment primary key,
 email varchar (50)
 );

 create table consultas(
 idConsulta int not null auto_increment primary key,
 nombre varchar (50),
 apellido varchar(50),
 telefono varchar(10),
 textarea varchar(500)
);
