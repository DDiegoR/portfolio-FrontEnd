export class skills {
    id!: number;
    titulo!: string;
    imagen!: string;
    porcentaje!: number;

    constructor(titulo: string, imagen: string, porcentaje: number){
        this.titulo = titulo;
        this.imagen = imagen;
        this.porcentaje = porcentaje;
    }
}