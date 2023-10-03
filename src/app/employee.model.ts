export class Employee {
  nombre !:string;
  apellido !:string;
  cargo! :string;
  salary !:number;

  constructor(nombre:string,apellido:string,cargo:string,salary:number){
  this.nombre = nombre;
  this.apellido = apellido;
  this.cargo = cargo;
  this.salary = salary;
}


}
