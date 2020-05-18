export class Estudiantes{

    constructor(public nombres:string,
                public apellidoP:string ,
                public apellidoM:string,
                public direccion:string,
                public edad:string,
                public rut:string,
                public cverificacion:string,
                public email:string,
                public telefono:string){}


                toString(): string {
                    return this.nombres + " " + this.apellidoP + " " + this.apellidoM + " " + this.direccion
                    + " " + this.edad + " " + this.rut + " " + this.cverificacion + " " + this.email + " " + this.telefono; 
                }


}