export class TareaModel {

    constructor(
      public id: string,
      public titulo: string,
      public descripcion: string,
      public estado: string,
      public fecha_creacion: string,
      public fecha_vencimiento: string,
    ) { }
  
  }