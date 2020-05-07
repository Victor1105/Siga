export class Estudiantes{

    nombres: string;
    apellidoP: string;
    apellidoM: string;
    direccion: string;
    edad: string;
    rut: string;
    cverificacion: string;
    email: string;
    telefono: string;

    constructor(nombresv:string, apellidoPv:string, apellidoMv:string, direccionv:string, edadv:string,
        rutv:string, cverificacionv: string, emailv:string, telefonov:string){

            this.nombres = nombresv;
            this.apellidoP = apellidoPv;
            this.apellidoM = apellidoMv;
            this.direccion = direccionv;
            this.edad = edadv;
            this.rut = rutv;
            this.cverificacion = cverificacionv;
            this.email = emailv;
            this.telefono = telefonov;


    }


}