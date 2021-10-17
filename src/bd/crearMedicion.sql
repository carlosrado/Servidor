--crearMedicion.sql
create table Medicion(
  id integer primary key,
  valorCO2 int not null,
  valorTemperatura int not null
);
