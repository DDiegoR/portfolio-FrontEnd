export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    imagen: string;
    rolTrabajo: string;

    constructor(nombre: string, apellido: string, imagen: string, rolTrabajo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
        this.rolTrabajo = rolTrabajo;
    }
}