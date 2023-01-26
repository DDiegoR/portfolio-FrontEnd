export class proyecto {
    id!: number;
    titulo!: string;
    link!: string;
    imagen!: string;
    descripcion!: string;
    
    constructor(titulo: string, link: string, descripcion: string, imagen: string) {
        this.titulo = titulo;
        this.link = link;
        this. descripcion = descripcion;
        this.imagen = imagen;
    }
}