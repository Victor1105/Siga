export class Horario{

    hora:string;
    lunes: string;
    martes: string;
    miercoles: string;
    jueves: string;
    viernes: string;
    sabado: string;
    
     

    constructor( hora:string, lunes:string, martes:string, miercoles:string, 
                 jueves:string, viernes:string, sabado:string){

        this.hora = hora;
        this.lunes = lunes;
        this.martes = martes;
        this.miercoles = miercoles;
        this.jueves = jueves;
        this.viernes = viernes;
        this.sabado = sabado;


    }
    
    
    
}