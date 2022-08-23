export const Data = {
  encabezado : { 
    nombre: "",
    apellido: "",
    codigo_postal: 0,
    n_movil: "",
    ciudad: "",
    comunidad_autonoma: "",
    correo: ""
   },
  resumen: "",
  formacion: [],
  habilidades: [],
  aptitudes: [],
  historial: [],
  infoAdicional: "",
  template: "0"
}

const ejemplo = {
  encabezado : { 
    nombre: "jesus",
    apellido: "nazaret",
    codigo_postal: 0,
    n_movil: "",
    ciudad: "",
    comunidad_autonoma: "",
    correo: ""
   },
  resumen: "d",
  formacion: [
    {id:"1", titulo: "Ingenieria informatica", localizacion: "Donostia", fecha: "24/04/2023"},
    {id:"2", titulo: "Doctorado", localizacion: "Madrid", fecha: "24/06/2025"},
    {id:"3", titulo: "Doctorad2", localizacion: "Madrid", fecha: "24/06/2025"}
  ],
  habilidades: [
    {id:"1", titulo: "programar"},
    {id:"2", titulo: "stackoverflow"}
  ],
  aptitudes: [
    {id:"1", titulo: "buena vibra"},
    {id:"2", titulo: "majo"}
  ],
  historial: [
    {id:"1", titulo: "historial 1" , empresa: "empresa", puesto:"alto", f_inicio: "34", f_final: "3"},
    {id:"2", titulo: "historial 2" , empresa: "empresa", puesto:"bajo", f_inicio: "34", f_final: "2"},
  ],
  infoAdicional: "",
  template: "0"
}