--crearMedicion.sql
create table Medicion(
  id integer primary key,
  valor int not null,
  tipo varchar(11),
  fecha date not null,
  hora time not null
);
