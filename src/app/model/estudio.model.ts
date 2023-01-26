export class estudio {
    id!: number;
    titulo!: string;
    link!: string;
    descripcion!: string;
    imagen!: string;
    fechaInicio!: string;
    fechaFin!: string;

    constructor (titulo: string, link: string, descripcion: string, imagen: string, fechaInicio: string, fechaFin: string) {
        this.titulo = titulo;
        this.link = link;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}