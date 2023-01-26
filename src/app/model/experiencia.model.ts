export class experiencia {
    id!: number;
    empresa!: string;
    logo!: string;
    rolActividad!: string;
    descripcion!: string;
    fechaInicio!: string;
    fechaFin!: string;

    constructor(empresa: string, logo:string, rolActividad: string, descripcion: string, fechaInicio: string, fechaFin: string) {
        this.empresa = empresa;
        this.logo = logo;
        this.rolActividad = rolActividad;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}